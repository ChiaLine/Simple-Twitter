import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  postTweet({ description }) {
    return apiHelper.post(`/tweets`, { description }, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
}