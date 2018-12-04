import axios from 'axios';
import env from './env'
axios.defaults.timeout = 5000;
axios.defaults.baseURL =env.baseUrl;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型

// http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


// //http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         if(response.data.errCode ==2){
//             router.push({
//                 path:"/login",
//                 querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//             })
//         }
//         return response;
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params,
        })
            .then(response => {
                let result = {};
                // console.log(response)
                if(response.data == null || response.data == undefined){
                    result.status = -2002;
                    result.statusdes ='网络错误';
                    response(result);
                }
                if(response.data.Code==0){
                    result.status = 1;
                    result.data = response.data.Lst;
                    result.statusdes = response.data.Msg;
                }else{
                    result.status = response.data.Code;
                    result.data = response.data.Lst;
                    result.statusdes = response.data.Msg;
                }
                resolve(result);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                let result = {};
                if(response.data == null || response.data == undefined){
                    result.status = -2002;
                    result.statusdes ='网络错误';
                    response(result);
                }
                if(response.data.Code==0){
                    result.status = 1;
                    result.data = response.data.Lst;
                    result.statusdes = response.data.Msg;
                }else{
                    result.status = response.data.Code;
                    result.data = response.data.Lst;
                    result.statusdes = response.data.Msg;
                }
                resolve(result);
            },err => {
                reject(err)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.patch(url,data)
            .then(response => {
                let result = {};
                if(response.data == null || response.data == undefined){
                    result.status = -2002;
                    result.statusdes ='网络错误';
                    response(result);
                }
                if(response.data.Code==0){
                    result.status = 1;
                    result.data = response.data.Lst;
                    result.statusdes = response.data.Msg;
                }else{
                    result.status = response.data.Code;
                    result.data = response.data.Lst;
                    result.statusdes = response.data.Msg;
                }
                resolve(result);
            },err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                let result = {};
                if(response.data == null || response.data == undefined){
                    result.status = -2002;
                    result.statusdes ='网络错误';
                    response(result);
                }
                if(response.data.Code==0){
                    result.status = 1;
                    result.data = response.data.Lst;
                    result.statusdes = response.data.Msg;
                }else{
                    result.status = response.data.Code;
                    result.data = response.data.Lst;
                    result.statusdes = response.data.Msg;
                }
                resolve(result);
            },err => {
                reject(err)
            })
    })
}