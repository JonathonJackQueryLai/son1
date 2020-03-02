import axios from 'axios'
config = {
    
}

export function request(config ,success ,failure){
    const instance =axios.create({
        baseURL:'http://47.106.71.73:5000/',
        timeout:5000
    })

    instance(config).then(res =>{
        success(res);
    })
    .catch(err =>{
        failure(err)
    })
    
}
