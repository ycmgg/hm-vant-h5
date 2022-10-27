import axios from 'axios'
import { Toast } from 'vant'
import { getToken, removeToken } from '@/utils/storage'
import router from '@/router'
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  if (error || error.response.data.message) {
    if (error.response.status === 401) {
      Toast({ message: '登录状态过期, 请重新登录', icon: 'fail' })
      removeToken()
      router.push('/login')
    }
    Toast({ message: error.response.data.message, icon: 'fail' })
  }
  return Promise.reject(error)
})

export default request
