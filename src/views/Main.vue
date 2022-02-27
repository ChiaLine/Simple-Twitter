<template>
  <div class="main">
    <UserCreateTweet @after-show-modal="afterShowModal"/>
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
      showModal: false
    }
  },
  methods: {
    afterShowModal() {
      console.log("afterShowModal----main");
      this.$emit("after-show-modal");
    },
  },
}
</script>
