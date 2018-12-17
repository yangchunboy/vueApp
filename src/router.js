/**
 * @author chuck
 * @date 2018/12/17
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/home/index.vue';
import About from './pages/about/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '*',
    component: Home
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
