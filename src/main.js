import Vue from 'vue';
import App from './App.vue';

// 路由
import router from './router'
// Vuex
import store from './store';
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Mock数据模拟
import './api/mock'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});