<template>
  <div class="user-follow">
    <nav>
      <!-- 回上一頁區塊 -->
      <!-- 要再將連結修改成回到原使用者UserSelf頁面，需要Id -->
      <router-link to="/User/UserSelf" class="wrapper d-flex">
        <img class="arrow" src="https://i.imgur.com/3y7W3fG.png" alt="" />
        <div class="m-2">
          <h5 class="userName">John Doe</h5>
          <h5 class="tweetNumber">25貼文</h5>
        </div>
      </router-link>
      <!-- 卡片切換導覽列 -->
      <div class="card-buttons">
        <button class="card-button">
          <span>跟隨者</span>
        </button>
        <button class="card-button">
          <span>正在跟隨</span>
        </button>
      </div>
    </nav>
    <!-- FollowCards 列表 -->
    <FollowCards />
  </div>
</template>

<script>
import FollowCards from "../components/FollowCards.vue"
export default {
  name: "UserFollow",
  components: {
    FollowCards,
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/user-follow.scss";
</style>