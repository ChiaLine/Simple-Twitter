<template>
  <div class="follow-cards">
    <div
      v-for="user in currentCardUsers"
      :key="user.id"
      class="follow-card d-flex"
    >
      <img :src="user.avatar | emptyImage" alt="avatar" />
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
import { emptyImageFilter } from "../utils/mixins";
import userFollowAPI from "./../apis/userFollow";
import { Toast } from "./../utils/helpers";

export default {
  name: "FollowCards",
  props: {
    dataId: {
      type: Number,
      default: 1,
    },
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      currentCardUsers: [],
    };
  },
  created() {
    this.fetchCardsData();
  },
  methods: {
    // TODO: isLoading
    async fetchCardsData() {
      const { id: userId } = this.$route.params;
      try {
        if (this.dataId === 1) {
          // 串接跟隨者
          let response = await userFollowAPI.getUserFollowers(userId);
          const { data } = response;
          this.currentCardUsers = data;
          if (data.length === 0) {
            Toast.fire({
              icon: "warning",
              title: "沒有跟隨者from前端",
            });
          }
        } else {
          // 串接正在跟隨的使用者
          let response = await userFollowAPI.getUserFollowings(userId);
          const { data } = response;
          this.currentCardUsers = data;
          if (data.length === 0) {
            Toast.fire({
              icon: "warning",
              title: "沒有正在跟隨的使用者from前端",
            });
          }
        }
      } catch (e) {
        Toast.fire({
          icon: "warning",
          title: e.response.data.message,
        });
      }
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

