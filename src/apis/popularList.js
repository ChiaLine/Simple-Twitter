import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getPopularList() {
    return apiHelper.get(`/users/top`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
}
