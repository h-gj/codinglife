import VueRouter from 'vue-router'

import Home from './views/Home'
import Detail from './views/Detail'
import Signup from './views/Signup'


export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: Home
      },
      {
        path: '/detail',
        name: 'detail',
        component: Detail
      },
      {
        path: '/signup',
        name: 'signup',
        component: Signup
      }
    ]
  })
