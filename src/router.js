import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './view/index.vue';
import Detail from './view/detail.vue';
import One from './view/one.vue';
import Two from './view/two.vue';
import Two2 from './view/two2.vue';
import Three from './view/three.vue';
import Three2 from './view/three2.vue';
import Result from './view/result.vue';

const carefree = process.env.NODE_ENV === 'carefree'

//懒加载（按需加载）
const Detail2 = () => import('./view/detail2.vue');

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index },
  { path: '/detail', component: Detail },
  { path: '/detail2', component: Detail2 },
  { path: '/one', component: One },
  { path: '/two', component: Two},
  { path: '/two2', component: Two2},
  { path: '/three', component: Three},
  { path: '/three2', component: Three2},
  { path: '/result', component: Result},
];

const router = new VueRouter({
	mode:carefree?'hash':'history',
	routes
});

export default router;
