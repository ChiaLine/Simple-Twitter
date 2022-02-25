<template>
  <div class="other"> 
    <h1>UserOther.vue 放卡片區</h1>
    <div class="other-buttons">
      <a href="" class="other-button">
        <span>推文</span>
      </a>
      <a href="" class="other-button">
        <span>推文與回覆</span>
      </a>
      <a href="" class="other-button">
        <span>喜歡的內容</span>
      </a>
    </div>
    <TweetCards />
  </div>
</template>

<script>
import TweetCards from '../components/TweetCards.vue'

export default {
  name: 'UserOther',
  components: {
    TweetCards,
  }
}
</script>

<style scoped>
  .other {
    border-left: 1px solid #E6ECF0;
    border-right: 1px solid #E6ECF0;
  }

  .other-buttons {
    margin: 50px 0 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #E6ECF0;
    
  }

  .other-button {
    margin-left: 55px;
    font-weight: 500;
    color: #657786;
  }
</style>