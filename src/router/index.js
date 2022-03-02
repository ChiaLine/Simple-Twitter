import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import User from '../views/User.vue'
// 載入 state
import store from './../store'

Vue.use(VueRouter)

// 沒有驗證的管理者，即使知道網址、也應該被轉址到 404 頁面
const authorizeIsAdmin = (to, from, next) => {
  const adminToken = store.state.adminToken
  // 若帳號沒有 token 的驗證就轉址到 404 頁面
  if (adminToken === null) {
    next('/notfound')
    return
  }

  next()
}

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
      // 沒有權限的使用者來說，即使他知道網址、也應該被轉址到 404 頁面
      beforeEnter: authorizeIsAdmin,
      children: [
        {
          path: 'MainList',
          name: 'MainList',
          component: () => import('../views/AdminMainList.vue'),
          beforeEnter: authorizeIsAdmin
        },
        {
          path: 'UserList',
          name: 'UserList',
          component: () => import('../views/AdminUserList.vue'),
          beforeEnter: authorizeIsAdmin
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
  // 新增後台 token 驗證
  store.commit("setAdminUser");
  next()
})

export default router
