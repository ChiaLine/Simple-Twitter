// src/components/ReplyListTweet.vue
// ReplyList.vue使用
<template>
  <div class="w-100">
    <div class="wrapper d-flex">
      <img
        @click.stop.prevent="goBack"
        class="arrow"
        src="https://i.imgur.com/3y7W3fG.png"
        alt=""
      />
      <h5 class="returnTweet">推文</h5>
    </div>
    <div class="wrapper">
      <div class="user d-flex" @click.stop.prevent="toUserPage">
        <img
          class="avatar"
          :data-userId="tweet.UserId"
          :src="tweet.tweetedUser.avatar | emptyImage"
          alt=""
        />
        <div class="info py-3">
          <h5 class="account" :data-userId="tweet.UserId">
            {{ tweet.tweetedUser.name }}
          </h5>
          <h5 class="grey-font" :data-userId="tweet.UserId">
            @{{ tweet.tweetedUser.account }}
          </h5>
        </div>
      </div>
      <p class="tweetContent">
        {{ tweet.description }}
      </p>
      <div class="datetime d-flex">
        <p class="grey-font mb-3 ml-3">
          {{ tweet.updatedAt | formatDate }}
        </p>
      </div>
    </div>
    <div class="wrapper d-flex">
      <span class="record d-flex">
        <p class="number">{{ tweet.totalReplies }}</p>
        <p class="text">回覆</p>
      </span>
      <span class="record d-flex">
        <p class="number">{{ tweet.totalLikes }}</p>
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

<script>
import { formatDateFilter } from "./../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
import replyListAPI from "./../apis/replyList";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  mixins: [formatDateFilter, emptyImageFilter],
  props: {
    tweet: {
      type: Object,
      require: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async addLike(tweetId) {
      try {
        let { data } = await replyListAPI.addLike(tweetId);
        console.log(data);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    goBack() {
      this.$router.back();
    },
    toUserPage(e) {
      console.log(e.target);
      const avatarUserId = Number(e.target.dataset.userid);
      const currentUserId = this.currentUser.id;
      if (avatarUserId === currentUserId) {
        this.$router.push({ name: "UserSelf" });
      } else if (avatarUserId) {
        this.$router.push({ name: "UserOther", params: { id: avatarUserId } });
      }
    },
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/reply.scss";
</style>