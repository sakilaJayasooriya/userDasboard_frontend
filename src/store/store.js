import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
})