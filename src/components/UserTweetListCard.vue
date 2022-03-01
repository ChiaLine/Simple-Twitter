<template>
  <div>
    <div class="self-buttons">
      <button class="self-button"
      @click.stop.prevent="fetchUserTweets(currentUser.id)"
      >推文</button>
      <button class="self-button"
      @click.stop.prevent="fetchUserReplyTweets(currentUser.id)"
      >推文與回覆</button>
      <button class="self-button"
      @click.stop.prevent="fetchUserLikeTweets(currentUser.id)"
      >喜歡的內容</button>
    </div>
    <div class="tweet-cards" v-if="toggleButton === 'tweet'">
      <div class="tweet-card" v-for="tweet in userTweets" :key="tweet.id">
        <div class="tweet-card-top">
          <div class="tweet-card-avatar">
            <div>
              <img
                class="tweet-card-img"
                :src="currentUser.avatar | emptyImage"
              />
            </div>
          </div>
          <div
            class="tweet-card-content"
            @click.stop.prevent="toReplyList()"
          >
            <div >
              <span class="tweet-card-name">{{ currentUser.name }}</span>
              <span class="tweet-card-account">
                @{{ currentUser.account }}・{{
                  currentUser.createdAt | formatDate
                }}
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
            @click.stop.prevent="afterShowReplyModal(currentUser.id)"
          >
            <img class="icon-reply" :src="iconReply" />
            <span>{{ tweet.totalReplies }}</span>
          </button>
          <button
            class="tweet-like-icon"
            v-if="tweet.isLiked"
            :disabled="isProcessing"
          >
            <img class="icon-like" :src="iconIsLike" />
            <span>{{ tweet.totalLikes }}</span>
          </button>
          <button
            class="tweet-like-icon"
            v-else
            :disabled="isProcessing"
          >
            <img class="icon-like" :src="iconUnLike" />
            <span>{{ tweet.totalLikes }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="tweet-cards" v-else-if="toggleButton === 'reply'">
      <div class="tweet-card" v-for="tweet in userRepliedTweets" :key="tweet.id">
        <div class="tweet-card-top">
          <div class="tweet-card-avatar">
            <div>
              <img
                class="tweet-card-img"
                :src="currentUser.avatar | emptyImage"
              />
            </div>
          </div>
          <div
            class="tweet-card-content"
            @click.stop.prevent="toReplyList"
          >
            <div >
              <span class="tweet-card-name">{{ currentUser.name }}</span>
              <span class="tweet-card-account">
                @{{ currentUser.account }}・{{
                  currentUser.createdAt | formatDate
                }}
              </span>
              <div class="tweet-card-reply">
                <span class="card-reply-title">回覆</span>
                <span class="card-reply-name">@{{ tweet.repliedTweet.tweetedUser.account }}</span>
              </div>
              <p class="tweet-card-description">
                {{ tweet.repliedTweet.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tweet-cards" v-else-if="toggleButton === 'like'">
      <div class="tweet-card" v-for="tweet in userLikeTweets" :key="tweet.id">
        <div class="tweet-card-top">
          <div class="tweet-card-avatar">
            <div>
              <img
                class="tweet-card-img"
                :src="tweet.avatar | emptyImage"
              />
            </div>
          </div>
          <div
            class="tweet-card-content"
            @click.stop.prevent="toReplyList"
          >
            <div >
              <span class="tweet-card-name">{{ tweet.id }}</span>
              <span class="tweet-card-account">
                @{{ tweet.id }}・{{
                  tweet.id | formatDate
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
            @click.stop.prevent="afterShowReplyModal(currentUser.id)"
          >
            <img class="icon-reply" :src="iconReply" />
            <span>{{ tweet.likedTweet.totalReplies }}</span>
          </button>
          <button
            class="tweet-like-icon"
            v-if="tweet.isLiked"
            :disabled="isProcessing"
          >
            <img class="icon-like" :src="iconIsLike" />
            <span>{{ tweet.likedTweet.totalLikes }}</span>
          </button>
          <button
            class="tweet-like-icon"
            v-else
            :disabled="isProcessing"
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
import { mapState } from "vuex";
import { emptyImageFilter } from "../utils/mixins";
import { formatDateFilter } from "./../utils/mixins";
import userTweetsAPI from "../apis/userTweets";
import { Toast } from "../utils/helpers";

export default {
  name: 'UserTweetListCard',
  mixins: [emptyImageFilter, formatDateFilter],
  data() {
    return {
      userTweets: [],
      userRepliedTweets: [],
      userLikeTweets: [],
      toggleButton: 'tweet',
      iconUnLike: "https://i.imgur.com/fWY8yOj.png",
      iconIsLike: "https://i.imgur.com/LQTMNI0.png",
      iconReply: "https://i.imgur.com/EwJRYkP.png",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser() {
      console.log('222', this.currentUser.id)
      this.fetchUserTweets(this.currentUser.id);
    }
  },
  methods: {
    async fetchUserTweets(userId) {
      try {
        console.log('fetchUserTweets', userId)
        const { data } = await userTweetsAPI.getUserTweets(userId);
        // console.log(data)
        this.userTweets = data;
        this.toggleButton = 'tweet';
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
        console.log('ReplyTweets', userId)
        const { data } = await userTweetsAPI.getUserRepliedTweets(userId);
        console.log(data)
        this.userRepliedTweets = data;
        this.toggleButton = 'reply';

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
        console.log('UserLikeTweets', userId)
        const { data } = await userTweetsAPI.getUserLikeTweets(userId);
        console.log(data)
        this.userLikeTweets = data;
        this.toggleButton = 'like';

      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    afterShowReplyModal(replyUserId) {
      console.log("ShowReplyModal----UserTweetListCard", replyUserId);
      this.$emit("after-show-reply-modal",replyUserId);
    },
    toReplyList() {
      // 點選區塊後轉址到 未處理
      console.log('toReplyList')
    },
  },
}
</script>

<style scoped style lang="scss">
@import "../assets/scss/tweet-cards.scss";

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
.card-reply-title {
  color: #657786;
  // font-weight: 500;
}
.card-reply-name{
  color: #FF6600;
  margin-left: 5px;
}
</style>