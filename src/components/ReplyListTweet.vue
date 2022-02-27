// src/components/ReplyListTweet.vue
// ReplyList.vue使用
<template>
  <div class="w-100">
    <router-link to="/User" class="wrapper d-flex">
      <img class="arrow" src="https://i.imgur.com/3y7W3fG.png" alt="" />
      <h5 class="returnTweet">推文</h5>
    </router-link>
    <div class="wrapper">
      <div class="user d-flex">
        <img class="avatar" :src="tweet.tweetedUser.avatar" alt="" />
        <div class="info py-3">
          <h5 class="account">{{ tweet.tweetedUser.name }}</h5>
          <h5 class="grey-font">@{{ tweet.tweetedUser.account }}</h5>
        </div>
      </div>
      <p class="tweetContent">
        {{ tweet.description }}
      </p>
      <div class="datetime d-flex">
        <p class="grey-font mb-3 ml-3">
          {{ tweet.updatedAt | formatDate }}
        </p>
      </div>
    </div>
    <div class="wrapper d-flex">
      <span class="record d-flex">
        <p class="number">{{ tweet.totalReplies }}</p>
        <p class="text">回覆</p>
      </span>
      <span class="record d-flex">
        <p class="number">{{ tweet.totalLikes }}</p>
        <p class="text">喜歡次數</p>
      </span>
    </div>
    <div class="wrapper">
      <div class="d-flex justify-content-between p-3 w-50">
        <img class="icon" src="https://i.imgur.com/0KluE5j.png" alt="" />
        <img class="icon" src="https://i.imgur.com/5UnPtv0.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDateFilter } from "./../utils/mixins";
import replyListAPI from "./../apis/replyList";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [formatDateFilter],
  props: {
    tweet: {
      type: Object,
      require: true,
    },
  },
  methods: {
    async addLike(tweetId) {
      try {
        let { data } = await replyListAPI.addLike(tweetId);
        console.log(data);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/reply.scss";
</style>