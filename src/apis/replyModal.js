import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getReplyListTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },

  // 新增回覆API
  postTweetReply({ tweetId, comment }) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, { comment }, { headers: { Authorization: `Bearer ${getToken()}` } })
  }
}