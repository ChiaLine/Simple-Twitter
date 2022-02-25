<template>
  <div class="tweet-cards">
    <div class="tweet-card" v-for="card in tweetCards" :key="card.id">
      <div class="tweet-card-avatar">
        <img class="tweet-card-img" :src="card.avatar | emptyImage"/>
      </div>
      <div class="tweet-card-content">
        <span class="tweet-card-name">{{ card.name }}</span>
        <a href="" class="tweet-card-account">
          <span>@{{ card.account }}・{{ card.createdAt }}</span>
        </a>
        <p class="tweet-card-description">{{ card.description }}</p>
        <div class="tweet-card-icons">
          <div class="tweet-card-icon">
            <img class="icon-reply" :src="icomReply" alt="">
            <span>30</span>
          </div>
          <div class="tweet-card-icon">
            <img class="icon-like" :src="icomLike" alt="">
            <span>45</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'

const dummyData = {
  tweetCards: [
        {
          id: 1,
          avatar: null,
          account: "apple",
          name: "Apple",
          description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
          UserId: 1,
          updatedAt: "3小時",
          createdAt: "3小時",
        },
        {
          id: 2,
          avatar: null,
          account: "apple",
          name: "Apple",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
          UserId: 2,
          updatedAt: "3小時",
          createdAt: "3小時",
        },
        {
          id: 3,
          avatar: null,
          account: "apple",
          name: "Apple",
          description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
          UserId: 3,
          updatedAt: "3小時",
          createdAt: "3小時",
        },
  ],
}

export default {
  name: "TweetCards",
  data() {
    return {
      tweetCards: [],
      icomLike: "https://i.imgur.com/wp77Lzc.png",
      icomReply: "https://i.imgur.com/GW72xOA.png",
    };
  },
  mixins: [ emptyImageFilter ],
  created() {
    this.fetchTweetCards()
  },
  methods: {
    fetchTweetCards() {
      this.tweetCards = dummyData.tweetCards
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/tweet-cards.scss";
</style>
