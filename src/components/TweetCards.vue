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
        <div class="tweet-reply-icon" @click.stop.prevent="handleTweetCardReplyButton(card.UserId)">
          <img class="icon-reply" :src="iconReply">
          <span>{{card.totalReplies}}</span>
        </div>
        <div class="tweet-like-icon" @click.stop.prevent="deleteTweetLike(card.id)" v-if="card.isLiked">
          <img class="icon-like" :src="iconIsLike">
          <!-- <img class="icon-like" :src="iconUnLike"> -->
          <span>{{card.totalLikes}}</span>
        </div>
        <div class="tweet-like-icon" @click.stop.prevent="addTweetCardLike(card.id)" v-else>
          <!-- <img class="icon-like" :src="iconIsLike"> -->
          <img class="icon-like" :src="iconUnLike">
          <span>{{card.totalLikes}}</span>
        </div>
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
      // iconLike: false,
      iconUnLike: "https://i.imgur.com/fWY8yOj.png",
      iconIsLike: "https://i.imgur.com/LQTMNI0.png",
      iconReply: "https://i.imgur.com/EwJRYkP.png",
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
        // console.log(data)
        this.tweetCards = data
      } catch (error) {
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },
    handleTweetCardReplyButton(replyUserId) {
      console.log('show reply nodal', replyUserId);
      this.$emit("after-show-reply-modal", replyUserId);
    },
    async addTweetCardLike(UserId) {      
      try {
        console.log(UserId)
        console.log("addTweetCardLike");
        const response = await tweetAPI.addTweetLike(UserId)
        console.log(response)

         this.tweetCards = this.tweetCards.map(tweet => {
          if (tweet.id === UserId) {
            return {
              ...tweet,
              isLiked: true,
              totalLikes: tweet.totalLikes + 1
            }
          } else {
            return {
              ...tweet
            }
          }
        })

        await this.fetchTweetCards()
      } catch (error) {
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },
    async deleteTweetLike(UserId) {

      try {
        console.log(UserId)
        console.log("addTweetCardLike");
        const response = await tweetAPI.deleteTweetLike(UserId)
        console.log(response)
        this.tweetCards = this.tweetCards.map(tweet => {
          if (tweet.id === UserId) {
            return {
              ...tweet,
              isLiked: false,
              totalLikes: tweet.totalLikes - 1
            }
          } else {
            return {
              ...tweet
            }
          }
        })
      
        await this.fetchTweetCards()
      } catch (error) {
        console.error(error)
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
