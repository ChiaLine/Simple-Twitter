// src/components/ReplyListTweet.vue
// ReplyList.vue使用
<template>
  <div class="w-100">
    <div class="wrapper d-flex">
      <img class="arrow" src="https://i.imgur.com/3y7W3fG.png" alt="" />
      <h5 class="returnTweet">推文</h5>
    </div>
    <div class="wrapper">
      <div class="user d-flex">
        <img class="avatar" src="https://i.imgur.com/suYPL6j.png" alt="" />
        <div class="info py-3">
          <h5 class="account">Apple</h5>
          <h5 class="grey-font">@apple</h5>
        </div>
      </div>
      <p class="tweetContent">
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip deserunt
        reprehenderit elit laborum.
      </p>
      <div class="datetime d-flex">
        <p class="grey-font mb-3 ml-3">上午04:00</p>
        <p class="grey-font mb-3 ml-3">2015年3月16日</p>
      </div>
    </div>
    <div class="wrapper d-flex">
      <span class="record d-flex">
        <p class="number">34</p>
        <p class="text">回覆</p>
      </span>
      <span class="record d-flex">
        <p class="number">218</p>
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

<style scoped lang="scss">
@import "../assets/scss/reply.scss";
</style>