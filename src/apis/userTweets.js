import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getUserTweets(userId) {
    return apiHelper.get(`/users/${userId}/tweets`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  getUserLikeTweets(userId) {
    return apiHelper.get(`/users/${userId}/likes`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  getUserRepliedTweets(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
}
