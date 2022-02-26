<template>
  <div>
    <h1>Modal</h1>
    <button @click.stop.prevent="modalOn">TweetModal</button>
    <TweetModal v-show="showModal" @after-hide-modal="modalOff" />
    <button @click.stop.prevent="replyModalOn">ReplyModal</button>
    <ReplyModal v-show="showReplyModal" @after-hide-reply-modal="replyModalOff" />
    <button @click.stop.prevent="userEditModalOn">UserEditModal</button>
    <UserEditModal v-show="showUserEditModal" @after-hide-user-edit-modal="userEditModalOff" />
  </div>
</template>

<script>
import TweetModal from "../components/TweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue";
import UserEditModal from "../components/UserEditModal.vue";
export default {
  components: {
    TweetModal,
    ReplyModal,
    UserEditModal
  },
  data() {
    return {
      showModal: false,
      showReplyModal: false,
      showUserEditModal: false,
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
    // UserEditModal
    userEditModalOn() {
      this.showUserEditModal = true;
    },
    userEditModalOff() {
      this.showUserEditModal = false;
    }
  }, 
};
</script>

<style lang="css" scoped>
button {
  border: 1px solid red;
}
</style>