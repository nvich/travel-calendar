import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import TravelsView from './pages/travels/index.vue';

Vue.use(VueRouter);

const Travels = { render: h => h(TravelsView) };

const routes = [
  { path: '/travels', component: Travels },
];

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount('[data-js="app"]');
