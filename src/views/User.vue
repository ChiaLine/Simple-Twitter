<template>
  <div class="user w-100 h-100 d-flex justify-content-center">
    <NavBar @after-show-tweet-modal="afterShowTweetModal"/>
    <router-view 
    @after-show-tweet-modal="afterShowTweetModal" 
    @after-show-reply-modal="afterShowReplyModal"
    />
    <PopularUsers />
    <TweetModal v-if="showTweetModal" @after-hide-modal="afterHideTweetModal"/>
    <ReplyModal 
    v-if="showReplyModal" 
    @after-hide-reply-modal="afterHideReplyModal"
    :reply-user-id="replyUserId"
    />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import PopularUsers from '../components/PopularUsers.vue'
import TweetModal from '../components/TweetModal.vue'
import ReplyModal from '../components/ReplyModal.vue'

export default {
  name: "User",
  components: {
    NavBar,
    PopularUsers,
    TweetModal,
    ReplyModal,
  },
  data() {
    return {
      showTweetModal: false,
      showReplyModal: false,
      replyUserId: -1,
    }
  },
  methods: {
    afterShowTweetModal() {
      console.log("afterShowModal--user");
      this.showTweetModal = true
    },
    afterHideTweetModal() {
      console.log("afterHideModal--user");
      this.showTweetModal = false
    },
    afterShowReplyModal(replyUserId) {
      console.log("Reply--user", replyUserId);
      this.showReplyModal = true
      this.replyUserId = replyUserId
    },
    afterHideReplyModal() {
      console.log("hide--user");
      this.showReplyModal = false
    }
  },
}
</script>

<style scoped>
  .user {
    /* 確認寬度是否有滿版 */
    /* background-color: rgb(238, 236, 234); */
  }
</style>