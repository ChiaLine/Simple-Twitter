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
            {{card.tweetedUser.name}} <a href=""><span>@{{card.tweetedUser.account}}・{{card.tweetedUser.createdAt}}</span></a>
          </p>
          <p>{{card.description}}</p>
        </div>
        <button class="card-button">
          <img :src="icom">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
import { emptyImageFilter } from '../utils/mixins'

export default {
  name: 'AdminMainList',
  mixins: [ emptyImageFilter ],
  data() {
    return {
      adminMainList: [],
      icom: 'https://i.imgur.com/WilghMR.png',
      admin: {
        account: 'root',
        password: '12345678'
      }
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets() {
       try {
        const response = await adminAPI.getTweetsList()
        const { data } = response
        // console.log(data)

        // 若請求過程有錯，則進到錯誤處理
        // if (response.status !== 200) {
        //   throw new Error(data.methods)
        // }

        this.adminMainList = data
      } catch (error) {
        // console.error(error.response)
        Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },
  },
}
</script>

<style scoped>
  .AdminMainList {
    width: 65%;
    border-left: 1px solid #E6ECF0;
    border-right: 1px solid #E6ECF0;
    margin-right: 10px;
    flex-grow: 1;
  }
  h6 {
    font-weight: 700;
  }
  .cards {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    /* height: 80px; */
    border-top: 1px solid #E6ECF0;
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
  .card-button {
    position: absolute;
    top: 10px;
    right: 5px;
    width: 50px;
  }
</style>