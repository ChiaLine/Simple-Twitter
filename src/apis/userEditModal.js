import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  // postTweetReply({ tweetId, comment }) {
  //   return apiHelper.post(`/tweets/${tweetId}/replies`, { comment }, { headers: { Authorization: `Bearer ${getToken()}` } })
  // },
  updateUserData({ userId, formData }) {
    return apiHelper.put(`users/${userId}`, formData, { headers: { Authorization: `Bearer ${getToken()}` } })
  }
}