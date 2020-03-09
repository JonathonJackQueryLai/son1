// import axios from './axioshttp1'

import axios from 'axios'


export default function getTokenData(name, pwd) {
    axios.post('http://47.106.71.73:5000/api/TokenAuth/Authenticate',
        // axios.post(
        // 'api/TokenAuth/Authenticate',
        {
            "userNameOrEmailAddress": name,
            "password": pwd,
        })
        .then(
            function (response) {

                
            console.log('Bearer ' + response.data.result.accessToken);
            $store.Authorization = 'Bearer ' + response.data.result.accessToken;

        }
        )
        .catch(function (error) {
            console.log(error);
        });
}


// export default  function getNewData() {
//     return axios(
//         {
//         url: 'api/TokenAuth/Authenticate',
//         methods: {
//             post
//         },

//     }).then(function (response) {
//         console.log('Bearer ' + response.data.result.accessToken);
//         this.$store.Authorization = 'Bearer ' + response.data.result.accessToken;

//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// }