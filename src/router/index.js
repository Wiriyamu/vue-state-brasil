import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: () =>
      import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/why-vue',
    name: 'Why Vue',
    component: () =>
      import(/* webpackChunkName: "why-vue" */ '../views/WhyVue.vue')
  },
  {
    path: '/case-study',
    name: 'Case Study',
    component: () =>
      import(/* webpackChunkName: "case-study" */ '../views/CaseStudy.vue')
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () =>
      import(/* webpackChunkName: "guide" */ '../views/Guide.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () =>
      import(/* webpackChunkName: "community" */ '../views/Community.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () =>
      import(/* webpackChunkName: "project" */ '../views/Project.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
