<template>
  <div class="main">
    <UserCreateTweet />
    <TweetCards />
  </div>
</template>

<script>
import UserCreateTweet from '../components/UserCreateTweet.vue'
import TweetCards from '../components/TweetCards.vue'

export default {
  name: 'UserMain',
  components: {
    UserCreateTweet,
    TweetCards,
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