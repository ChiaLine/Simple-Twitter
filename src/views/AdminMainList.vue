<template>
  <div class="AdminMainList">
    <div>
      <h6 class="m-3">推文清單</h6>
      <div class="cards" v-for="card in adminMainList" :key="card.id">
        <div class="avatar">
          <img :src="card.tweetedUser.avatar | emptyImage" alt="">
        </div>
        <div class="card-content">
          <p>
            {{card.tweetedUser.name}} 
            <span class="card-account">
              @{{card.tweetedUser.account}}・{{card.tweetedUser.createdAt | formatDate}}
            </span>
          </p>
          <p class="card-description">{{card.description | descriptionText}}</p>
        </div>
        <button class="card-button" 
        @click.stop.prevent="deleteTweetButton(card.id)"
        :disabled="isProcessing"
        >&#215;</button>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
import { emptyImageFilter } from '../utils/mixins'
import { formatDateFilter } from "./../utils/mixins";

export default {
  name: 'AdminMainList',
  mixins: [ emptyImageFilter, formatDateFilter ],
  data() {
    return {
      adminMainList: [],
      isProcessing: false
    }
  },
  created() {
    this.fetchTweets()
  },
  filters: {
    descriptionText(description) {
      if (description.length > 50) {
        return description.substr(0, 50) + '...'
      } else {
        return description
      }    
    }
  },
  methods: {
    async fetchTweets() {
       try {
        const { data } = await adminAPI.getTweetsList()
        this.adminMainList = data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得推文資料，請稍後再試..'
        })
      }
    },
    async deleteTweetButton(tweetId) {
      console.log('222',tweetId)
       try {
        this.isProcessing = true
        await adminAPI.deleteTweet(tweetId)
        this.fetchTweets()
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法刪除推文資料，請稍後再試..'
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/_color.scss';
  .AdminMainList {
    width: 65%;
    height: 100%;
    overflow-y: scroll;
    border-left: 1px solid $modal-outline;
    border-right: 1px solid $modal-outline;
    margin-right: 10px;
    flex-grow: 1;
  }
  h6 {
    font-weight: 700;
    font-size: 18px;
  }
  .cards {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    border-top: 1px solid $modal-outline;
  }
  .avatar {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    border-radius: 50%;
  }
  .card-content {
    width: 90%;
    margin-left: 10px;
    padding: 10px;
  }
  .card-account{
    color: $text-gray;
  }
  .card-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .card-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    font-weight: 700;
    font-size: 18px;
    color: $text-gray;
  }
</style>