<template>
  <div class="tweet-cards">
    <div class="tweet-card" v-for="card in tweetCards" :key="card.id">
      <div class="tweet-card-avatar">
        <img class="tweet-card-img" :src="card.tweetedUser.avatar | emptyImage"/>
      </div>
      <div class="tweet-card-content">
        <span class="tweet-card-name">{{ card.tweetedUser.name }}</span>
        <a href="" class="tweet-card-account">
          <span>@{{ card.tweetedUser.account }}・{{ card.tweetedUser.createdAt | formatDate }}</span>
        </a>
        <p class="tweet-card-description">{{ card.description }}</p>
        <div class="tweet-card-icons">
          <div class="tweet-card-icon">
            <img class="icon-reply" :src="iconReply" alt="">
            <span>{{card.tweetedUser.totalTweets}}</span>
          </div>
          <div class="tweet-card-icon">
            <img class="icon-like" :src="iconLike" alt="">
            <span>{{card.tweetedUser.totalLiked}}</span>
          </div>
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
      iconLike: "https://i.imgur.com/wp77Lzc.png",
      iconReply: "https://i.imgur.com/GW72xOA.png",
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

        // 若請求過程有錯，則進到錯誤處理
        // if (response.status !== 200) {
        //   throw new Error(data.methods)
        // }
        
        this.tweetCards = data
      } catch (error) {
        console.error(error)
        Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/tweet-cards.scss";
</style>
