// src/views/ReplyList.vue
<template>
  <div class="replyList">
    <ReplyListTweet />
    <ReplyListCards />
  </div>
</template>

<script>
import ReplyListTweet from "./../components/ReplyListTweet";
import ReplyListCards from "./../components/ReplyListCards";

export default {
  components: {
    ReplyListTweet,
    ReplyListCards,
  },
};
</script>


<style scoped>
.replyList {
  width: 600px;
  border-radius: 5px;
  border: 1px solid #e6ecf0;
  /* background-color: rgb(238, 236, 234); */
}
</style>