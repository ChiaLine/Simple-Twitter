import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import User from '../views/User.vue'
import store from './../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: () => import('../views/Regist.vue')
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: () => import('../views/Setting.vue')
    },
    {
      path: '/User',
      name: 'User',
      redirect: '/User/Main',
      component: User,
      children: [
        {
          path: 'Main',
          name: 'Main',
          component: () => import('../views/Main.vue'),
        },
        {
          path: 'ReplyList/:id',
          name: 'ReplyList',
          component: () => import('../views/ReplyList.vue'),
        },
        {
          path: 'UserSelf',
          name: 'UserSelf',
          component: () => import('../views/UserSelf.vue'),
        },
        {
          path: 'UserFollow/:id',
          name: 'UserFollow',
          component: () => import('../views/UserFollow.vue'),
        },
        {
          path: 'UserOther/:id',
          name: 'UserOther',
          component: () => import('../views/UserOther.vue'),
        },
      ]
    },
    {
      path: '/AdminLogin',
      name: 'AdminLogin',
      component: () => import('../views/AdminLogin.vue')
    },
    {
      path: '/Admin',
      name: 'Admin',
      redirect: '/Admin/MainList',
      component: () => import('../views/Admin.vue'),
      children: [
        {
          path: 'MainList',
          name: 'MainList',
          component: () => import('../views/AdminMainList.vue'),
        },
        {
          path: 'UserList',
          name: 'UserList',
          component: () => import('../views/AdminUserList.vue'),
        },
      ]
    },
    {
      // Modal暫時用，之後再刪
      path: '/Modal',
      name: 'Modal',
      component: () => import('../views/Modal.vue')
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

router.beforeEach((to, from, next) => {
  // 使用 dispatch 呼叫 Vuex 內的 actions
  store.dispatch('fetchCurrentUser')
  next()
})

export default router
