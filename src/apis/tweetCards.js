import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTweetCards() {
    return apiHelper.get(`/tweets`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
}