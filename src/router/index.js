import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import blacklist from '../views/blacklist.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blacklist',
    name: 'blacklist',
    component: blacklist
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
