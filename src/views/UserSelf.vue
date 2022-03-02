<template>
  <div class="user-self h-100">
    <UserProfileCard :initialUser="currentUser" @after-show-user-edit-modal="afterShowUserEditModal"/>
    <UserTweetListCard
      @after-show-reply-modal="afterShowReplyModal"
      :initialUser="currentUser"
    />
    <ReplyModal
      v-if="showReplyModal"
      @after-hide-reply-modal="afterHideReplyModal"
      :reply-user-id="replyUserId"
    />
  </div>
</template>

<script>
import UserTweetListCard from "../components/UserTweetListCard.vue";
import UserProfileCard from "../components/UserProfileCard.vue";
import ReplyModal from "../components/ReplyModal.vue";
import { mapState } from "vuex";

export default {
  name: "UserSelf",
  components: {
    UserProfileCard,
    UserTweetListCard,
    ReplyModal,
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
      userId: -1,
      showReplyModal: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    afterShowReplyModal(replyUserId) {
      console.log("Reply--user", replyUserId);
      this.showReplyModal = true;
      this.replyUserId = replyUserId;
    },
    afterHideReplyModal() {
      console.log("hide--user");
      this.showReplyModal = false;
    },
    afterShowUserEditModal() {
      console.log("UEM in UserSelf");
      this.$emit("after-show-user-edit-modal");
    },
  },
};
</script>
