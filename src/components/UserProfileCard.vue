<template>
  <div>
    <!-- 要再將連結修改成上一頁 -->
    <router-link to="/User" class="wrapper d-flex">
      <img class="arrow" src="https://i.imgur.com/3y7W3fG.png" alt="" />
      <div class="m-2">
        <h5 class="returnTweet">John Doe</h5>
        <h5 class="tweetNumber">25貼文</h5>
      </div>
    </router-link>
    <div class="position-relative">
      <img src="https://imgur.com/ZUPNMlW.png" alt="" class="cover w-100" />
      <img
        src="https://imgur.com/suYPL6j.png"
        alt=""
        class="avatar ml-3 position-absolute"
      />
    </div>
    <div class="profile position-relative ml-3">
      <button class="editProfile btn position-absolute">編輯個人資料</button>
      <h2 class="name">John Doe</h2>
      <h5 class="account">@hetjohn</h5>
      <p class="note">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
      <div class="follow d-flex">
        <span class="record d-flex mr-4">
          <p class="number">34個</p>
          <p class="text">跟隨中</p>
        </span>
        <span class="record d-flex">
          <p class="number">59位</p>
          <p class="text">跟隨者</p>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/_color.scss";
@import "../assets/scss/_extends.scss";
$border-style: 1px solid #e6ecf0;

.arrow {
  width: 17px;
  height: 14px;
  margin: 1.25rem;
}
.returnTweet {
  @extend %title-text;
}
.tweetNumber {
  @extend %tag-text;
  font-size: 13px;
  line-height: 19px;
}
.cover {
  max-width: 600px;
  border-radius: 0%;
}
.avatar {
  width: 140px;
  height: 140px;
  transform: translateY(-50%);
  border: 4px solid #ffffff;
}
.editProfile {
  top: 0;
  right: 0;
  transform: translate(-7%, -155%);
  width: 120px;
  height: 38px;
  @extend %second-title-text;
  line-height: 15px;
  color: $button-orange;
  border: 1px solid $button-orange;
  border-radius: 30px;
}
.profile {
  top: 4.3rem;
  margin-bottom: 7rem;
}
.name {
  @extend %title-text;
}
.account {
  @extend %tag-text;
}
.note {
  margin: 10px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
}
.number {
  @extend %content-text;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.text {
  @extend %content-text;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #657786;
}
</style>