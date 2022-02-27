<template>
  <h1>FollowCards</h1>
</template>

<script>
// TODO: 確認資料格式、串接資料
// 目前這個部分的API資料格式尚未確認，因此接近於單一user的假資料
const dummyFollowers = [
  {
    id: 0,
    avatar: "string",
    account: "string",
    name: "followers",
    introduction: "I am a follower 1.",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
  },
  {
    id: 1,
    avatar: "string",
    account: "string",
    name: "followers",
    introduction: "I am a follower 2.",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T10:44:39.000Z",
    createdAt: "2022-02-27T10:44:39.000Z",
  },
];

const dummyFollowings = [
  {
    id: 0,
    avatar: "string",
    account: "string",
    name: "followings",
    introduction: "I am a following 1.",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
  },
  {
    id: 1,
    avatar: "string",
    account: "string",
    name: "followings",
    introduction: "I am a following 2.",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T10:44:39.000Z",
    createdAt: "2022-02-27T10:44:39.000Z",
  },
];

export default {
  name: "FollowCards",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/follow-cards.scss";
</style>

