import Vue from 'vue';
import Router from 'vue-router';
import main from '@/views/main.vue';
import detail from '@/views/detail.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: main,
    },
    {
      path: '/detail/:pid',
      name: 'detail',
      component: detail,
    },
  ],
});
