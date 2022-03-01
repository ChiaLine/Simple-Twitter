// src/views/ReplyList.vue
<template>
  <div class="replyList">
    <ReplyListTweet v-show="!tweetIsLoading" :tweet="tweet" />
    <div class="w-100">
      <ReplyListCards
        v-show="!cardsIsLoading"
        v-for="card in replyListCards"
        :key="card.UserId"
        :card="card"
        :tweetedUser="tweetedUser"
      />
    </div>
  </div>
</template>

<script>
import ReplyListTweet from "./../components/ReplyListTweet";
import ReplyListCards from "./../components/ReplyListCards";
import replyListAPI from "./../apis/replyList";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    ReplyListTweet,
    ReplyListCards,
  },
  data() {
    return {
      tweetId: 4,
      // tweetId要從user/main點擊貼文時獲取
      tweet: {},
      replyListCards: [],
      tweetedUser: "",
      tweetIsLoading: true,
      cardsIsLoading: true,
    };
  },
  created() {
    const cardId = this.$route.params.id;
    this.fetchReplyListTweet(cardId);
    this.fetchReplyListCards(cardId);
  },
  methods: {
    async fetchReplyListTweet(tweetId) {
      try {
        let { data } = await replyListAPI.getReplyListTweet(tweetId);
        this.tweet = data;
        this.tweetIsLoading = false;
        this.tweetedUser = data.tweetedUser.account;
      } catch (error) {
        this.tweetIsLoading = false;
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async fetchReplyListCards(tweetId) {
      try {
        let { data } = await replyListAPI.getReplyListCards(tweetId);
        this.replyListCards = data;
        this.cardsIsLoading = false;
      } catch (error) {
        this.cardsIsLoading = false;
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
};
</script>


<style scoped>
.replyList {
  width: 600px;
  /* border-radius: 5px; */
  /* border: 1px solid #e6ecf0; */
  /* background-color: rgb(238, 236, 234); */
}
</style>