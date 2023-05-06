import Axios from 'axios'

const config = {
    baseURL: '',
    timeout: 3000,
    headers: {
        Accept: "application/json, text/plain, */*",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json"
    }
}

const instance = Axios.create(config);

// 添加请求拦截器
instance.interceptors.request.use((config) => {
    console.log('1', config)
}, (error) => {
    console.log('21', error)
    return Promise.reject(error);
})
// 添加响应拦截器
instance.interceptors.response.use((response) => {
    console.log('3', response)

}, (error) => {
    console.log('4', error)
    return Promise.reject(error);
})

export default instance;