/**
 * Created by hasee on 2018/6/25.
 */
import http from '~/plugins/http'
import { API } from '~/plugins/api'
const state = {
  authUser: null, // 用户auth
  newsCategory: { // 示例，获取新闻分类
    loading: false,
    data: []
  }
}
const getters = {
  authUser: state => state.authUser,
  newsCategory: state => state.newsCategory.data
}
const mutations = {
  // 用户auth
  SET_USER (state, data) {
    state.authUser = data
  },
  // 新闻分类mutation
  SET_CATEGORY (state) {
    state.newsCategory.loading = false
  },
  SET_CATEGORY_SUCCESS (state, data) {
    state.newsCategory.loading = true
    state.newsCategory.data = data
  }
}
const actions = {
  // nuxtServerInit在服务端渲染每一个页面之前调用
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  // 登录
  login({ commit }, { username, password }) {
    try {
      // 模拟请求异步数据
      setTimeout(() => {
        commit('SET_USER', {
          username: username,
          password: password,
          uid: 1
        })
      }, 1000)
    } catch(error) {

    }
  },
  // 登出
  logout({ commit }) {
    commit('SET_USER', null)
  },
  // 获取分类
  getNewsCategory({ commit }) {
    commit('SET_CATEGORY')
    return http.fetch(API.newsCategory).then(res => commit('SET_CATEGORY_SUCCESS', res.data))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}