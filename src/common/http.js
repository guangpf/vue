import Axios from 'axios'

Axios.defaults.withCredentials = true

// request interceptor 请求拦截
Axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

// response interceptor 响应拦截
/* eslint-disable eqeqeq */
Axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
})

export default Axios
