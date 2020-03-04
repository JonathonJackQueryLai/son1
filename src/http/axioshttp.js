import axios from 'axios'
// import qs from 'qs'


axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] ='application/json,text/html,application/xhtml+xml,application/xml;charset=UTF-8';        //配置请求头
axios.defaults.headers.post['User-Agent'] = ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

if (process.env.NODE_ENV === "development") {
 axios.defaults.baseURL='/turn/'
}else {
  axios.defaults.baseURL='http://47.106.71.73:5000/';
}

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
      if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
      }
      return config;  
    },
    error => {
      localStorage.removeItem('Authorization');
      return Promise.reject(error);
    });


//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    //对响应数据做些事
    
    if(!res.data.z){
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
 
  if (error && error.response) {
    switch (error.response.status) {
        case 400: error.message = '请求错误(400)'; break;
        case 401: error.message = '未授权，请重新登录(401)'; break;
        case 403: error.message = '拒绝访问(403)'; break;
        case 404: error.message = '请求出错(404)'; break;
        case 408: error.message = '请求超时(408)'; break;
        case 501: error.message = '服务未实现(501)'; break;
        case 502: error.message = '网络错误(502)'; break;
        case 503: error.message = '服务不可用(503)'; break;
        case 504: error.message = '网络超时(504)'; break;
        case 505: error.message = 'HTTP版本不受支持(505)'; break;
        default: error.message = `连接出错(${error.response.status})!`;
    }
} else {
  error.message = '连接服务器失败!'
}

return Promise.resolve(error.response);
});


export default { }
