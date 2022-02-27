<template>
  <div class="follow-cards">
    <div class="follow-card d-flex">
      <img
        src="https://randomuser.me/api/portraits/women/90.jpg"
        alt="avatar"
      />
      <div class="text-area flex-grow-1 d-flex flex-column">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column">
            <p class="name">Name</p>
            <p class="account">@account</p>
          </div>
          <button class="btn follow-btn">正在跟隨</button>
        </div>
        <p class="introduction">introduction introduction introduction introduction introduction introduction introduction introduction</p>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: 確認資料格式、串接資料
const dummyFollowers = [
  {
    id: 0,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followers",
    introduction: "I am a follower 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
  },
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followers",
    introduction: "I am a follower 2. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T10:44:39.000Z",
    createdAt: "2022-02-27T10:44:39.000Z",
  },
];

const dummyFollowings = [
  {
    id: 0,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followings",
    introduction: "I am a following 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
  },
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followings",
    introduction: "I am a following 2. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T10:44:39.000Z",
    createdAt: "2022-02-27T10:44:39.000Z",
  },
];

export default {
  name: "FollowCards",
  data() {
    return {
      currentData: dummyFollowers,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/follow-cards.scss";
</style>

