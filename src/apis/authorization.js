// ./src/apis/authorization.js
import { apiHelper } from './../utils/helpers'

export default {
  signIn({ account, password }) {
    return apiHelper.post('/signin', {
      account,
      password
    })
  },
  adminLogin({ account, password }) {
    return apiHelper.post('admin/signin', {
      account,
      password
    })
  }
}