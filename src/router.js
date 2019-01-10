import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Detail from './views/Detail.vue';
import Work from './views/Work.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});

export default router;
