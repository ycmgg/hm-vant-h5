import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/storage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/article',
    children: [
      { path: '/article', component: () => import('@/views/layouts/article') },
      { path: '/collect', component: () => import('@/views/layouts/collect') },
      { path: '/like', component: () => import('@/views/layouts/like') },
      { path: '/user', component: () => import('@/views/layouts/user') }
    ]
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail')
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    component: () => import('@/views/register')
  }
]

const router = new VueRouter({
  routes
})
const paiminmgList = ['/login', '/register']
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    // 数组方法 includes 在数组存在返回 true 否则返回 false
    if (paiminmgList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
