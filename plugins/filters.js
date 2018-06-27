/**
 * Created by hasee on 2018/6/25.
 */
import Vue from 'vue'
import filters from '~/filters'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))