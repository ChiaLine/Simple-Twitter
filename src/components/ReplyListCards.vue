// src/components/ReplyListCards.vue
// ReplyList.vue使用
<template>
  <div class="w-100">
    <div class="wrapper d-flex">
      <img src="https://i.imgur.com/suYPL6j.png" alt="" class="avatar mt-3" />
      <div class="info py-3">
        <div class="user d-flex mb-1">
          <h5 class="account mr-1">Mary Jane</h5>
          <h5 class="grey-font mr-2">@mjjjjj</h5>
          <h5 class="grey-font">13小時</h5>
        </div>
        <div class="ReplyUser d-flex mb-1">
          <p class="grey-font mr-1">回覆</p>
          <h5 class="orange-font">@apple</h5>
        </div>
        <p class="replyContent">Great~</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/reply.scss";
</style>