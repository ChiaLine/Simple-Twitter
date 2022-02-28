<template>
  <div class="follow-cards">
    <div
      v-for="user in currentCardUsers"
      :key="user.id"
      class="follow-card d-flex"
    >
      <img :src="user.avatar" alt="avatar" />
      <div class="text-area flex-grow-1 d-flex flex-column">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column">
            <p class="name">{{ user.name }}</p>
            <p class="account">@{{ user.account }}</p>
          </div>
          <button
            v-if="user.isFollowed"
            @click.stop.prevent="deleteIsFollow(user.id)"
            class="btn following-btn"
          >
            正在跟隨
          </button>
          <button
            v-else
            @click.stop.prevent="addIsFollow(user.id)"
            class="btn follow-btn"
          >
            跟隨
          </button>
        </div>
        <p class="introduction">{{ user.introduction }}</p>
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
    introduction:
      "I am a follower 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
    isFollowed: true,
  },
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followers",
    introduction:
      "I am a follower 2. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T10:44:39.000Z",
    createdAt: "2022-02-27T10:44:39.000Z",
    isFollowed: false,
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followers",
    introduction:
      "I am a follower 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
    isFollowed: true,
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followers",
    introduction:
      "I am a follower 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
    isFollowed: true,
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followers",
    introduction:
      "I am a follower 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
    isFollowed: true,
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followers",
    introduction:
      "I am a follower 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
    isFollowed: true,
  },
  {
    id: 6,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followers",
    introduction:
      "I am a follower 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
    isFollowed: true,
  },
  {
    id: 7,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followers",
    introduction:
      "I am a follower 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
    isFollowed: true,
  },
];

const dummyFollowings = [
  {
    id: 0,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followings",
    introduction:
      "I am a following 1. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T12:44:39.000Z",
    createdAt: "2022-02-27T12:44:39.000Z",
    isFollowed: true,
  },
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "followings",
    introduction:
      "I am a following 2. introduction introduction introduction introduction introduction introduction introduction introduction",
    followerId: 0,
    followingId: 0,
    updatedAt: "2022-02-27T10:44:39.000Z",
    createdAt: "2022-02-27T10:44:39.000Z",
    isFollowed: true,
  },
];

export default {
  name: "FollowCards",
  props: {
    dataId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentCardUsers: dummyFollowers,
    };
  },
  created() {
    this.fetchCardsData();
  },
  methods: {
    fetchCardsData() {
      if (this.dataId === 1) {
        // TODO: 串接跟隨者
        this.currentCardUsers = dummyFollowers;
      } else {
        // TODO: 串接正在跟隨的使用者
        this.currentCardUsers = dummyFollowings;
      }
      console.log("fetch");
    },
    addIsFollow(userId) {
      console.log("addIsFollow", userId);
      this.currentCardUsers = this.currentCardUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isFollowed: true,
          };
        } else {
          return {
            ...user,
          };
        }
      });
    },
    deleteIsFollow(userId) {
      console.log("deleteIsFollow", userId);
      this.currentCardUsers = this.currentCardUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isFollowed: false,
          };
        } else {
          return {
            ...user,
          };
        }
      });
    },
  },
  watch: {
    dataId: function () {
      this.fetchCardsData();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/follow-cards.scss";
</style>

