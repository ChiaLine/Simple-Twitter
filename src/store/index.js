import Vue from 'vue'
import Vuex from 'vuex'
import currentUserAPI from './../apis/getUserData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      account: "",
      email: "",
      name: "",
      avatar: "",
      cover: null,
      introduction: "",
      role: "",
      totalTweets: 0,
      totalFollowings: 0,
      totalFollowers: 0,
      totalLiked: 0,
      createdAt: "",
      updatedAt: ""
    },
    // 登入狀態
    isAuthenticated: false,
    token: '',
    // 新增後台 token
    adminToken: '',
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true

      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
    },
    setAdminUser(state) {
      // 將後台驗證用的 token 儲存在 state 中
      state.adminToken = localStorage.getItem('adminToken')
    },
    revokeAdminUser() {
      // 登出時將 token 移除
      localStorage.removeItem('adminToken')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        const { data } = await currentUserAPI.getCurrentUser()
        commit('setCurrentUser', data)
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
