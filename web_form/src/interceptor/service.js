import axios from 'axios'
import { getToken } from '@/utils/tokenUtil.js'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: '/api/talk/form', // baseURL会自动加在请求地址上
    timeout: 30000
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 在请求之前做些什么(获取并设置token)
    // config.headers['token'] = getToken('token')
    config.headers['content-type'] = 'application/json'
    // config.headers['Access-Control-Allow-Origin'] = '127.0.0.1:8004'
    // config.headers['Access-Control-Allow-Origin'] = '*'
    // config.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:8088'
    config.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:8004'
    // config.headers['Access-Control-Allow-Origin'] = 'http://localhost:8080'
    return config
}, (error) => {
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 对响应数据做些什么
    let { status, message } = response.data
    if(status !== 200) {
        Message({message: message || 'error', type: 'warning'})
    }
    return response
}, (error) => {
    return Promise.reject(error)
})

export default service
