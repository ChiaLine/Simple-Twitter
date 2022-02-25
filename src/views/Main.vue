<template>
  <div class="main">
    <UserCreateTweet />
  </div>
</template>

<script>
import UserCreateTweet from '../components/UserCreateTweet.vue'

export default {
  name: 'UserMain',
  components: {
    UserCreateTweet,
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .main {
    border-left: 1px solid #E6ECF0;
    border-right: 1px solid #E6ECF0;
  }
</style>