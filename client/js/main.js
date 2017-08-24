import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount('[data-js="app"]');
