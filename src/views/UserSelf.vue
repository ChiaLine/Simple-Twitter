<template>
  <div class="self">
    <UserProfileCard />
    <div class="self-buttons">
      <a href="" class="self-button">
        <span>推文</span>
      </a>
      <a href="" class="self-button">
        <span>推文與回覆</span>
      </a>
      <a href="" class="self-button">
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
  name: 'UserSelf',
  components: {
    TweetCards,
    UserProfileCard,
  }
}
</script>

<style scoped>
  .self {
    border-left: 1px solid #E6ECF0;
    border-right: 1px solid #E6ECF0;
  }

  .self-buttons {
    margin: 50px 0 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #E6ECF0;
    
  }

  .self-button {
    margin-left: 55px;
    font-weight: 500;
    color: #657786;
  }

</style>