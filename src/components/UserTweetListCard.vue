<template>
  <div class="h-100">
    <!-- 按鈕區 -->
    <div class="self-buttons">
      <button
        class="self-button"
        :class="{ active: toggleButton === 'tweet' }"
        @click.stop.prevent="fetchUserTweets(user.id)"
      >
        推文
      </button>
      <button
        class="self-button"
        :class="{ active: toggleButton === 'reply' }"
        @click.stop.prevent="fetchUserReplyTweets(user.id)"
      >
        推文與回覆
      </button>
      <button
        class="self-button"
        :class="{ active: toggleButton === 'like' }"
        @click.stop.prevent="fetchUserLikeTweets(user.id)"
      >
        喜歡的內容
      </button>
    </div>
    <!-- 自己的推文列表 -->
    <div class="tweet-cards" v-if="toggleButton === 'tweet'">
      <div class="tweet-card" v-for="tweet in userTweets" :key="tweet.id">
        <div class="tweet-card-top">
          <div class="tweet-card-avatar">
            <div @click.stop.prevent="toUserPage(tweet.UserId)">
              <img class="tweet-card-img" :src="user.avatar | emptyImage" />
            </div>
          </div>
          <div class="tweet-card-content" @click.stop.prevent="toReplyList()">
            <div>
              <span class="tweet-card-name">{{ user.name }}</span>
              <span class="tweet-card-account">
                @{{ user.account }}・{{ tweet.createdAt | formatDate }}
              </span>
              <p class="tweet-card-description">
                {{ tweet.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="tweet-card-icons">
          <button
            class="tweet-reply-icon"
            @click.stop.prevent="afterShowReplyModal(tweet.id)"
          >
            <img class="icon-reply" :src="iconReply" />
            <span>{{ tweet.totalReplies }}</span>
          </button>
          <button
            class="tweet-like-icon"
            v-if="tweet.isLiked"
            :disabled="isProcessing"
            @click.stop.prevent="deleteTweetLike(tweet.id)"
          >
            <img class="icon-like" :src="iconIsLike" />
            <span>{{ tweet.totalLikes }}</span>
          </button>
          <button
            class="tweet-like-icon"
            v-else
            :disabled="isProcessing"
            @click.stop.prevent="addTweetCardLike(tweet.id)"
          >
            <img class="icon-like" :src="iconUnLike" />
            <span>{{ tweet.totalLikes }}</span>
          </button>
        </div>
      </div>
    </div>
    <!-- 自己的推文回覆列表 -->
    <div class="tweet-cards" v-else-if="toggleButton === 'reply'">
      <div
        class="tweet-card"
        v-for="tweet in userRepliedTweets"
        :key="tweet.id"
      >
        <div class="tweet-card-top">
          <div class="tweet-card-avatar">
            <div @click.stop.prevent="toUserPage(tweet.UserId)">
              <img class="tweet-card-img" :src="user.avatar | emptyImage" />
            </div>
          </div>
          <div class="tweet-card-content" @click.stop.prevent="toReplyList">
            <div>
              <span class="tweet-card-name">{{ user.name }}</span>
              <span class="tweet-card-account">
                @{{ user.account }}・{{ tweet.createdAt | formatDate }}
              </span>
              <div class="tweet-card-reply">
                <span class="card-reply-title">回覆</span>
                <span class="card-reply-name"
                  >@{{ tweet.repliedTweet.tweetedUser.account }}</span
                >
              </div>
              <p class="tweet-card-description">
                {{ tweet.comment }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 喜歡的列表 -->
    <div class="tweet-cards" v-else-if="toggleButton === 'like'">
      <div class="tweet-card" v-for="tweet in userLikeTweets" :key="tweet.id">
        <div class="tweet-card-top">
          <div class="tweet-card-avatar">
            <div @click.stop.prevent="toUserPage(tweet.likedTweet.UserId)">
              <img
                class="tweet-card-img"
                :src="tweet.likedTweet.tweetedUser.avatar | emptyImage"
              />
            </div>
          </div>
          <div class="tweet-card-content" @click.stop.prevent="toReplyList">
            <div>
              <span class="tweet-card-name">{{
                tweet.likedTweet.tweetedUser.name
              }}</span>
              <span class="tweet-card-account">
                @{{ tweet.likedTweet.tweetedUser.account }}・{{
                  tweet.likedTweet.createdAt | formatDate
                }}
              </span>
              <p class="tweet-card-description">
                {{ tweet.likedTweet.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="tweet-card-icons">
          <button
            class="tweet-reply-icon"
            @click.stop.prevent="afterShowReplyModal(tweet.likedTweet.id)"
          >
            <img class="icon-reply" :src="iconReply" />
            <span>{{ tweet.likedTweet.totalReplies }}</span>
          </button>
          <button
            class="tweet-like-icon"
            v-if="tweet.likedTweet.isLiked"
            :disabled="isProcessing"
            @click.stop.prevent="deleteTweetLike(tweet.likedTweet.id)"
          >
            <img class="icon-like" :src="iconIsLike" />
            <span>{{ tweet.likedTweet.totalLikes }}</span>
          </button>
          <button
            class="tweet-like-icon"
            v-else
            :disabled="isProcessing"
            @click.stop.prevent="addTweetCardLike(tweet.likedTweet.id)"
          >
            <img class="icon-like" :src="iconUnLike" />
            <span>{{ tweet.likedTweet.totalLikes }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import { formatDateFilter } from "./../utils/mixins";
import userTweetsAPI from "../apis/userTweets";
import tweetAPI from "../apis/tweetCards";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "UserTweetListCard",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  mixins: [emptyImageFilter, formatDateFilter],
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
      userTweets: [],
      userRepliedTweets: [],
      userLikeTweets: [],
      iconUnLike: "https://i.imgur.com/fWY8yOj.png",
      iconIsLike: "https://i.imgur.com/LQTMNI0.png",
      iconReply: "https://i.imgur.com/EwJRYkP.png",
      toggleButton: "tweet",
      isProcessing: false,
      currentPage: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    initialUser(newValue) {
      console.log('111111111')
      this.user = {
        ...this.user,
        ...newValue,
      };
      this.fetchUserTweets(this.user.id);
    },
  },
  created() {
    this.checkCurrentPage();
  },
  methods: {
    checkCurrentPage() {
      this.currentPage = this.$route.name;
      // console.log(this.currentPage, this.user.id, this.currentUser.id)
      if (this.currentPage === "UserSelf") {
        this.user = {
          ...this.user,
          ...this.currentUser
        }
        this.isCurrentUser = true;
        this.fetchUserTweets(this.user.id);
      } else if (this.currentPage === "UserOther") {
        this.isCurrentUser = false;
      }
    },
    async fetchUserTweets(userId) {
      try {
        // console.log("fetchUserTweets", userId);
        const { data } = await userTweetsAPI.getUserTweets(userId);
        this.userTweets = data;

        if (!this.userTweets.length) {
          Toast.fire({
            icon: "error",
            title: "沒有推文的內容",
          });
        }

        this.toggleButton = "tweet";
      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async fetchUserReplyTweets(userId) {
      try {
        console.log("ReplyTweets", userId);
        const { data } = await userTweetsAPI.getUserRepliedTweets(userId);
        this.userRepliedTweets = data;

        if (!this.userRepliedTweets.length) {
          Toast.fire({
            icon: "error",
            title: "沒有回覆推文的內容",
          });
        }
        this.toggleButton = "reply";
      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async fetchUserLikeTweets(userId) {
      try {
        console.log("UserLikeTweets", userId);
        const { data } = await userTweetsAPI.getUserLikeTweets(userId);
        this.userLikeTweets = data;

        if (!this.userLikeTweets.length) {
          Toast.fire({
            icon: "error",
            title: "沒有喜歡的內容",
          });
        }

        this.toggleButton = "like";
      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async addTweetCardLike(id) {
      try {
        this.isProcessing = true;
        await tweetAPI.addTweetLike(id);

        if (this.toggleButton === "tweet") {
          await this.fetchUserTweets(this.user.id);
        } else if (this.toggleButton === "like") {
          await this.fetchUserLikeTweets(this.user.id);
        }

        Toast.fire({
          icon: "success",
          title: "成功加入喜歡的內容",
        });

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async deleteTweetLike(id) {
      try {
        this.isProcessing = true;
        await tweetAPI.deleteTweetLike(id);

        if (this.currentPage === "UserSelf") {
          await this.fetchUserLikeTweets(this.user.id);
        } else if (this.currentPage === "UserOther") {
          if (this.toggleButton === "tweet") {
            await this.fetchUserTweets(this.user.id);
          } else if (this.toggleButton === "like") {
            await this.fetchUserLikeTweets(this.user.id);
          }
        }

        Toast.fire({
          icon: "success",
          title: "成功取消喜歡的內容",
        });

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    afterShowReplyModal(replyTweetId) {
      console.log("ShowReplyModal----UserTweetListCard", replyTweetId);
      this.$emit("after-show-reply-modal", replyTweetId);
    },
    toUserPage(userID) {
      // 點選區塊後轉址到 未處理
      console.log("toUserPage", userID);
      console.log('currentUser', this.currentUser.id);
      // console.log("toUserPage", this.$route.name);
      if (userID === this.currentUser.id && this.$route.name !== 'UserSelf') {
        console.log('egg');
        this.$router.push({ name: "UserSelf" });
      } else if (userID !== this.currentUser.id) {
        console.log(this.$route.params.id)
        if (this.$route.name === 'UserOther' && Number(this.$route.params.id) === userID) {
          console.log('跳出')
          return
        } else {
          console.log(userID)

          // this.$router.push(`/User/UserOther/${userID}`);
          // this.$router.push({ name: "UserOther", params: { id: userID } });
        }
      }
    },
    toReplyList() {
      // 點選區塊後轉址到 未處理
      console.log("to轉址到未處理???");
    },
  },
};
</script>

<style scoped style lang="scss">
@import "../assets/scss/tweet-cards.scss";

.self-buttons {
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
}
.self-button {
  width: 130px;
  padding-bottom: 13px;
  font-weight: 500;
  color: #657786;
}
.card-reply-title {
  color: #657786;
}
.card-reply-name {
  color: #ff6600;
  margin-left: 5px;
}
.active {
  color: #ff6600;
  border-bottom: 1px solid #ff6600;
}
</style>