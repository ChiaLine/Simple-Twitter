// src/components/ReplyListCards.vue
// ReplyList.vue使用
<template>
  <div class="wrapper d-flex">
    <img
      @click.stop.prevent="toUserPage"
      :data-userId="card.UserId"
      :src="card.repliedUser.avatar | emptyImage"
      alt=""
      class="avatar mt-3"
    />
    <div class="info py-3">
      <div class="user d-flex mb-1">
        <h5 class="account mr-1">{{ card.repliedUser.name }}</h5>
        <h5 class="grey-font mr-2">@{{ card.repliedUser.account }}</h5>
        <h5 class="grey-font">{{ card.updatedAt | fromNow }}</h5>
      </div>
      <div class="ReplyUser d-flex mb-1">
        <p class="grey-font mr-1">回覆</p>
        <h5 class="orange-font">@{{ tweetedUser }}</h5>
      </div>
      <p class="replyContent">{{ card.comment }}</p>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
import { mapState } from "vuex";

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  props: {
    card: {
      type: Object,
      required: true,
    },
    tweetedUser: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
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