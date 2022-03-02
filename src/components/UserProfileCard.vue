// src/components/UserProfileCard.vue
<template>
  <div class="wrapper">
    <!-- 要再將連結修改成上一頁 -->
    <div class="d-flex">
      <img
        @click.stop.prevent="goBack"
        class="arrow"
        src="https://i.imgur.com/3y7W3fG.png"
        alt=""
      />
      <div class="m-2">
        <h5 class="returnTweet">{{ user.name }}</h5>
        <h5 class="tweetNumber">{{ user.totalTweets }}貼文</h5>
      </div>
    </div>
    <div class="position-relative">
      <img :src="user.cover | emptyImage" alt="" class="cover w-100" />
      <img
        :src="user.avatar | emptyImage"
        alt=""
        class="avatar ml-3 position-absolute"
      />
    </div>
    <div class="profile position-relative ml-3">
      <button v-if="isCurrentUser" class="editProfile btn position-absolute" @click.stop.prevent="showUserEditModal">
        編輯個人資料
      </button>
      <div v-else class="followOther position-absolute d-flex">
        <button class="iconWrapper d-flex">
          <img
            class="iconMail m-auto"
            src="https://imgur.com/nBCwk65.png"
            alt=""
          />
        </button>
        <button class="iconWrapper d-flex">
          <img
            class="iconNotify m-auto"
            src="https://imgur.com/fCt60a2.png"
            alt=""
          />
        </button>
        <button class="editProfile btn">正在跟隨</button>
      </div>
      <h2 class="name">{{ user.name }}</h2>
      <h5 class="account">@{{ user.account }}</h5>
      <p class="note">
        {{ user.introduction }}
      </p>
      <div class="follow d-flex">
        <span class="record d-flex mr-4">
          <p class="number">{{ user.totalFollowers }}個</p>
          <p class="text">跟隨中</p>
        </span>
        <span class="record d-flex">
          <p class="number">{{ user.totalFollowings }}位</p>
          <p class="text">跟隨者</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";

export default {
  mixins: [emptyImageFilter],
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {
        id: -1,
        account: "",
        email: "",
        name: "",
        avatar: "",
        cover: null,
        introduction: "",
        role: "",
        totalTweets: 0,
        totalFollowings: 0,
        totalFollowers: 0,
        totalLiked: 0,
        createdAt: "",
        updatedAt: "",
      },
      isCurrentUser: "",
    };
  },
  created() {
    this.checkCurrentPage();
  },
  methods: {
    checkCurrentPage() {
      const currentPage = this.$route.name;
      if (currentPage === "UserSelf") {
        this.isCurrentUser = true;
      } else if (currentPage === "UserOther") {
        this.isCurrentUser = false;
      }
    },
    goBack() {
      this.$router.back();
    },
    showUserEditModal() {
      this.$emit("after-show-user-edit-modal")
    }
  },
  watch: {
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };
    },
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/user-profile-card.scss";
</style>