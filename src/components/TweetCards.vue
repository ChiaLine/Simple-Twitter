<template>
  <div class="tweet-cards">
    <div class="tweet-card" 
    v-for="card in tweetCards" 
    :key="card.id"
    >
    <div class="tweet-card-top">
      <div class="tweet-card-avatar">
      <router-link
        :to="{
          name: 'UserOther'
        }"
      >
        <img class="tweet-card-img" :src="card.tweetedUser.avatar | emptyImage"/>
      </router-link>
      </div>
      <div class="tweet-card-content" @click.stop.prevent="toReplyList">
        <div>
          <span class="tweet-card-name">{{ card.tweetedUser.name }}</span>
          <span class="tweet-card-account">
            @{{ card.tweetedUser.account }}・{{ card.tweetedUser.createdAt | formatDate }}
          </span>
          <p class="tweet-card-description">{{ card.description }}</p>
        </div>
      </div>
    </div>
      <div class="tweet-card-icons">
        <button class="tweet-reply-icon" @click.stop.prevent="handleTweetCardReplyButton(card.id)">
          <img class="icon-reply" :src="iconReply">
          <span>{{card.totalReplies}}</span>
        </button>
        <button class="tweet-like-icon" 
        @click.stop.prevent="deleteTweetLike(card.id)" 
        v-if="card.isLiked" 
        :disabled="isProcessing"
        >
          <img class="icon-like" :src="iconIsLike">
          <span>{{card.totalLikes}}</span>
        </button>
        <button class="tweet-like-icon" 
        @click.stop.prevent="addTweetCardLike(card.id)" 
        v-else
        :disabled="isProcessing"
        >
          <img class="icon-like" :src="iconUnLike">
          <span>{{card.totalLikes}}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import { formatDateFilter } from "./../utils/mixins";
import tweetAPI from "../apis/tweetCards";
import { Toast } from "../utils/helpers";

export default {
  name: "TweetCards",
  data() {
    return {
      tweetCards: [],
      iconUnLike: "https://i.imgur.com/fWY8yOj.png",
      iconIsLike: "https://i.imgur.com/LQTMNI0.png",
      iconReply: "https://i.imgur.com/EwJRYkP.png",
      isProcessing: false
    };
  },
  mixins: [ emptyImageFilter, formatDateFilter ],
  created() {
    this.fetchTweetCards()
  },
  methods: {
    async fetchTweetCards() {
      try {
        const response = await tweetAPI.getTweetCards()
        const { data } = response
        this.tweetCards = data
      } catch (error) {
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },
    handleTweetCardReplyButton(replyTweetId) {
      console.log('show reply nodal', replyTweetId);
      this.$emit("after-show-reply-modal", replyTweetId);
    },
    async addTweetCardLike(id) {      
      try {
        this.isProcessing = true
        console.log(id)
        await tweetAPI.addTweetLike(id)
        await this.fetchTweetCards()
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },
    async deleteTweetLike(id) {
      try {
        console.log(id)
        await tweetAPI.deleteTweetLike(id)
        await this.fetchTweetCards()
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },
    toReplyList(){
      console.log('toReplyList')
      // 點選區塊後轉址到
      this.$router.push({name: 'ReplyList'})
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/tweet-cards.scss";
</style>
