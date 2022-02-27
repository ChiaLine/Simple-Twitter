<template>
  <div class="other"> 
    <UserProfileCard />
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
import UserProfileCard from '../components/UserProfileCard.vue'

export default {
  name: 'UserOther',
  components: {
    TweetCards,
    UserProfileCard,
  }
}
</script>

<style scoped>
  .other-buttons {
    padding-bottom: 10px;
    border-left: 1px solid #E6ECF0;
    border-right: 1px solid #E6ECF0;
    border-bottom: 1px solid #E6ECF0;
    
  }

  .other-button {
    margin-left: 55px;
    font-weight: 500;
    color: #657786;
  }
</style>