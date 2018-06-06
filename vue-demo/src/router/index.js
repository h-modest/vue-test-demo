import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/Index'
import Store from '@/components/components/store/Store'
import Home from '@/components/components/home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      children: [
        {
          path: 'home/:id?',
          component: Home
        },
        {
          path: 'store',
          component: Store
        },
        {
          path: ''
        }
      ]
    }
  ]
})
