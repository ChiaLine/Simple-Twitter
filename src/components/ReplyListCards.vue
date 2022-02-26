// src/components/ReplyListCards.vue
// ReplyList.vue使用
<template>
  <div class="wrapper d-flex">
    <img :src="card.repliedUser.avatar" alt="" class="avatar mt-3" />
    <div class="info py-3">
      <div class="user d-flex mb-1">
        <h5 class="account mr-1">{{ card.repliedUser.name }}</h5>
        <h5 class="grey-font mr-2">@{{ card.repliedUser.account }}</h5>
        <h5 class="grey-font">{{ card.updatedAt | fromNow }}</h5>
      </div>
      <div class="ReplyUser d-flex mb-1">
        <p class="grey-font mr-1">回覆</p>
        <h5 class="orange-font">@{{ tweetedUser }}</h5>
      </div>
      <p class="replyContent">{{ card.comment }}</p>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  props: {
    card: {
      type: Object,
      required: true,
    },
    tweetedUser: {
      type: String,
      required: true,
    },
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/reply.scss";
</style>