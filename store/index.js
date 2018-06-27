/**
 * Created by hasee on 2018/6/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const createStore = () => new Vuex.Store({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default createStore
