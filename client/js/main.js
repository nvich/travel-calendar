import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import TravelsView from './pages/travels/index.vue';
import TravelView from './pages/travels/get-id.vue';

Vue.use(VueRouter);

const Travels = { render: h => h(TravelsView) };
const Travel = { render: h => h(TravelView) };

const routes = [
  { path: '/travels', component: Travels },
  { path: '/travels/:id', component: Travel },
];

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount('[data-js="app"]');
