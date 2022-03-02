<template>
  <div class="other">
    <UserProfileCard :initialUser="user" />
    <UserTweetListCard :initialUser="user"/>
  </div>
</template>

<script>
import UserTweetListCard from "../components/UserTweetListCard.vue";
import UserProfileCard from "../components/UserProfileCard.vue";
import getUserDataAPI from "./../apis/getUserData";
import { Toast } from "./../utils/helpers";

export default {
  name: "UserOther",
  components: {
    UserTweetListCard,
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
    };
  },
  beforeRouteUpdate() {
    console.log(this.$route.params.id);
    this.fetchData(this.$route.params.id);
  },
  created() {
    console.log(this.$route.params.id);
    this.fetchData(this.$route.params.id);
  },
  methods: {
    async fetchData(userId) {
      try {
        let { data } = await getUserDataAPI.getUserProfile(userId);
        this.user = data;
        console.log("data", data);
        console.log("this.user", this.user);
        this.userIsLoading = false;
      } catch (error) {
        this.userIsLoading = false;
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
};
</script>

<style scoped>
.other-buttons {
  padding-bottom: 10px;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
}

.other-button {
  margin-left: 55px;
  font-weight: 500;
  color: #657786;
}
</style>