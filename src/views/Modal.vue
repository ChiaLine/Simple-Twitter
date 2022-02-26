<template>
  <div>
    <h1>Modal</h1>
    <button @click.stop.prevent="modalOn">TweetModal</button>
    <TweetModal v-show="showModal" @after-hide-modal="modalOff" />
    <button @click.stop.prevent="replyModalOn">ReplyModal</button>
    <ReplyModal v-show="showReplyModal" @after-hide-reply-modal="replyModalOff" />
  </div>
</template>

<script>
import TweetModal from "../components/TweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue"
export default {
  components: {
    TweetModal,
    ReplyModal
  },
  data() {
    return {
      showModal: false,
      showReplyModal: false,
    };
  },
  methods: {
    // Tweet Modal
    modalOn() {
      this.showModal = true;
    },
    modalOff() {
      this.showModal = false;
    },
    // ReplyModal
    replyModalOn() {
      this.showReplyModal = true;
    },
    replyModalOff() {
      this.showReplyModal = false;
    },
  },
};
</script>

<style lang="css" scoped>
button {
  border: 1px solid red;
}
</style>