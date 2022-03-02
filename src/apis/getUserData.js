import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get(`/users/self`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  getUserProfile(userId) {
    return apiHelper.get(`/users/${userId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  update(userId, { account, name, email, password, checkPassword }) {
    return apiHelper.put(`/users/${userId}`, {
      account,
      name,
      email,
      password,
      checkPassword
    }, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
}
