import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/about',
    redirect: { name: 'about' },
  },
]

const router = new VueRouter({
  routes,
})

export default router
