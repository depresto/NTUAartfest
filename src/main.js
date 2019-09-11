import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import vueSmoothScroll from 'vue2-smooth-scroll'
import responsive from 'vue-responsive'
import checkView from 'vue-check-view'
import VueScrollTo from 'vue-scrollto'

library.add(faSearch, faBars, faInstagram, faFacebook)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter);
Vue.use(vueSmoothScroll)
Vue.use(responsive)
Vue.use(checkView)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

import Start from './pages/Start.vue';
import Home from './pages/Home.vue';
import News from './pages/News.vue';
import Event from './pages/Event.vue';
import Guide from './pages/Guide.vue';
import About from './pages/About.vue';
import Exhibit from './pages/Exhibit.vue';
import Article from './pages/Article.vue';

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Start,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/news/:category?',
      name: 'news',
      component: News,
    },
    {
      path: '/events/:category?',
      name: 'events',
      component: Event,
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/article/:id',
      name: 'articlepage',
      component: Article
    },
    {
      path: '/exhibit/:name?',
      name: 'exhibit',
      component: Exhibit
    },
  ]
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app')
