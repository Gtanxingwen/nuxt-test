/**
 * Created by hasee on 2018/6/25.
 */
import axios from 'axios'
import Vue from 'vue'
import apiConfig from '~/api.config'

axios.defaults.timeout = 5000
axios.defaults.baseURL = apiConfig.baseUrl

//错误处理
const handle = (err) => {
  throw err
}

// 请求拦截
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
})

//简单封装get
const fetch = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        handle(err)
        reject(err)
      })
  })
}

//简单封装post
const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        handle(err)
        reject(err)
      })
  })
}

Vue.prototype.$fetch = fetch
Vue.prototype.$post = post

export default { fetch, post }