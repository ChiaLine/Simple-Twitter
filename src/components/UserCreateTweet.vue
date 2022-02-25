<template>
  <div>
    <p class="tweet-title">首頁</p>
    <div
      class="create-tweet-card"
      @click.stop.prevent="handleTweetButtonCard()"
    >
      <div class="tweet-card-img-container">
        <img class="tweet-card-img" src="https://i.imgur.com/1VXOEcB.png" />
      </div>
      <span class="tweet-card-title">有什麼新鮮事?</span>
      <button class="tweet-card-button" @click.stop.prevent="handleTweetButtonCard()">
        推文
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "userCreateTweet",
  data() {
    return {};
  },
  methods: {
    handleTweetButtonCard() {
      console.log("show modal");
      this.$emit("after-show-modal");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/user-create-tweet.scss";
</style>
