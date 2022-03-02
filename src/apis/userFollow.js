import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getUserProfile(userId) {
    return apiHelper.get(`/users/${userId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  getUserFollowings(userId) {
    return apiHelper.get(`/users/${userId}/followings`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  getUserFollowers(userId) {
    return apiHelper.get(`/users/${userId}/followers`, { headers: { Authorization: `Bearer ${getToken()}` } })
  }
}
