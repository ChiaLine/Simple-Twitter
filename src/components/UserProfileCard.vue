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
      <button v-if="isCurrentUser" class="editProfile btn position-absolute">
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
@import "../assets/scss/_color.scss";
@import "../assets/scss/_extends.scss";
$border-style: 1px solid #e6ecf0;

.wrapper {
  max-width: 600px;
  border-right: $border-style;
  border-left: $border-style;
}
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
  max-height: 200px;
  border-radius: 0%;
}
.avatar {
  width: 140px;
  height: 140px;
  transform: translateY(-50%);
  border: 4px solid #ffffff;
}
.editProfile {
  right: 0.1rem;
  transform: translate(-7%, -155%);
  width: 130px;
  height: 35px;
  @extend %second-title-text;
  line-height: 15px;
  color: $button-orange;
  border: 1px solid $button-orange;
  border-radius: 30px;
  margin-left: 0.4rem;
}
.iconWrapper {
  transform: translate(-7%, -155%);
  width: 35px;
  height: 35px;
  color: $button-orange;
  border: 1px solid $button-orange;
  border-radius: 30px;
  margin-right: 0.625rem;
  .iconMail {
    width: 17.5px;
    height: 15.75px;
    border-radius: 0px;
  }
  .iconNotify {
    width: 20.92px;
    height: 19.16px;
    border-radius: 0px;
  }
}
.profile {
  top: 4.3rem;
  margin-bottom: 7rem;
}
.followOther {
  right: 0.1rem;
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