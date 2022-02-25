<template>
  <div class="user w-100 h-100 d-flex justify-content-center">
    <NavBar />
    <router-view />
    <PopularUsers />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import PopularUsers from '../components/PopularUsers.vue'

export default {
  name: "User",
  components: {
    NavBar,
    PopularUsers,
  }
}
</script>

<style scoped>
  .user {
    /* 確認寬度是否有滿版 */
    /* background-color: rgb(238, 236, 234); */
  }
</style>