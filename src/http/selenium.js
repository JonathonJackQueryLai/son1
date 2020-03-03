import originAxios from 'axios'
import qs from 'qs'
import axios from './axios'


export default function axios(option) {
    return new Promise((reject, resolve) => {
        // 1.创建axios的实例
        const instance = originAxios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        });

        //2.使用instance 进行 request
        instance.interceptors.request.use(
            config => {
                return config
            }), err => {
                return err
            }

        //2.使用instance 进行 respone
        instance.interceptors.response.use(response => {
            // console.log('来到了response拦截success中');
            return response.data
        },
            err => {
                console.log('来到了response拦截failure中');
                console.log(err);
                if (err && err.response) {
                    switch (err.response.status) {

                        case 400: err.message = '请求错误(400)'; break;
                        case 401: return history.push('/login'); break;
                        case 403: err.message = '拒绝访问(403)'; break;
                        case 404: err.message = '请求出错(404)'; break;
                        case 408: err.message = '请求超时(408)'; break;
                        case 500: err.message = '服务器错误(500)'; break;
                        case 501: err.message = '服务未实现(501)'; break;
                        case 502: err.message = '网络错误(502)'; break;
                        case 503: err.message = '服务不可用(503)'; break;
                        case 504: err.message = '网络超时(504)'; break;
                        case 505: err.message = 'HTTP版本不受支持(505)'; break;
                        default: err.message = `连接出错(${err.response.status})!`;

                    }
                }
                return err
            })

        instance(option).then(res => {
            resolve(res)
        }
        ).catch(err => {
            reject(err)
        })
    })

}