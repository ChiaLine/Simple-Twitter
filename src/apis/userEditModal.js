import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  updateUserData({ userId, formData }) {
    return apiHelper.put(`users/${userId}`, formData, { headers: { Authorization: `Bearer ${getToken()}` } })
  }
}