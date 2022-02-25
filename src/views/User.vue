<template>
  <div class="user w-100 h-100 d-flex justify-content-center">
    <NavBar @after-show-modal="afterShowModal"/>
    <router-view @after-show-modal="afterShowModal" />
    <PopularUsers />
    <TweetModal v-if="showModal" @after-hide-modal="afterHideModal"/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import PopularUsers from '../components/PopularUsers.vue'
import TweetModal from '../components/TweetModal.vue'


export default {
  name: "User",
  components: {
    NavBar,
    PopularUsers,
    TweetModal,
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    afterShowModal() {
      console.log("afterShowModal--user");
      this.showModal = true
    },
    afterHideModal() {
      console.log("afterHideModal--user");
      this.showModal = false
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