import Vue from 'vue';
import Router from 'vue-router';
import main from '@/views/main.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: main,
    },
  ],
});
