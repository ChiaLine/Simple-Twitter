<template>
  <div class="self">
    <UserProfileCard v-show="!userIsLoading" :initialUser="user" />
    <div class="self-buttons">
      <a href="" class="self-button">
        <span>推文</span>
      </a>
      <a href="" class="self-button">
        <span>推文與回覆</span>
      </a>
      <a href="" class="self-button">
        <span>喜歡的內容{{ currentUser.id }}</span>
      </a>
    </div>
    <TweetCards />
  </div>
</template>

<script>
import TweetCards from "../components/TweetCards.vue";
import UserProfileCard from "../components/UserProfileCard.vue";
import getUserDataAPI from "./../apis/getUserData";
import { Toast } from "./../utils/helpers";
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
      userIsLoading: true,
      // currentUser: {},
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate() {
    console.log("beforeRouteUpdate");
    this.fetchData(14);
  },
  created() {
    this.fetchData(this.currentUser.id);
  },
  methods: {
    async fetchData(userId) {
      try {
        // let { id } = await this.currentUser;
        let { data } = await getUserDataAPI.getUserProfile(userId);
        let response = await getUserDataAPI.getUserProfile(userId);
        this.user = data;
        console.log(response);
        console.log("self-currentUser", this.currentUser.id);
        console.log("self-data", data);
        console.log("self-user", this.user);
        this.userIsLoading = false;
      } catch (error) {
        this.userIsLoading = false;
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
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