import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import store from '.store.js';
//import VeeValidate from 'vee-validate';
import * as VeeValidate from 'vee-validate'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './components/Dashboard.vue'


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VeeValidate);

Vue.component('app-nav',Navbar);
Vue.component('footer-nav',Footer);

const routes=[
  {path:'/',component:Dashboard},
  {path:'/login',component:Login},
  {path:'/register',component:Register}
]

const router =new VueRouter({
  mode:'history',
  routes,
  base: "user",
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default router
