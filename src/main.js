import Vue from 'vue';

import router from './router';
import store from './store/index.js';

import App from './app.vue';


const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
