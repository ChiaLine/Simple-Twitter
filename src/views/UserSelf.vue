<template>
  <div class="self">
    <UserProfileCard :initialUser="currentUser" />
    <div class="self-buttons">
      <a href="" class="self-button">
        <span>推文</span>
      </a>
      <a href="" class="self-button">
        <span>推文與回覆</span>
      </a>
      <a href="" class="self-button">
        <span>喜歡的內容</span>
      </a>
    </div>
    <TweetCards />
  </div>
</template>

<script>
import TweetCards from "../components/TweetCards.vue";
import UserProfileCard from "../components/UserProfileCard.vue";
import { mapState } from "vuex";

export default {
  name: "UserSelf",
  components: {
    TweetCards,
    UserProfileCard,
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
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style scoped>
.self {
  /* height: 100%; */
  /* overflow-y: scroll; */
}

.self-buttons {
  padding-bottom: 10px;
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
}

.self-button {
  margin-left: 55px;
  font-weight: 500;
  color: #657786;
}
</style>