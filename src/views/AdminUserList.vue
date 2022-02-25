<template>
  <div class="AdminUserList">
    <div>
      <h6 class="m-3">使用者列表</h6>
      <div class="cards">
        <div class="card" v-for="user in users" :key="user.id">
          <div class="card-img-top">
            <img class="background-img" :src="user.cover" alt="">
          </div>
          <div class="user-img-container">
            <img class="user-img" :src="user.avatar" alt="">
          </div>
          <div class="card-body">
            <h5>{{ user.name }}</h5>
            <p>@{{ user.account }}</p>
            <div class="card-body-bottom">
                <img class="card-body-icon" src="https://i.imgur.com/GW72xOA.png" alt="">
                <p>{{user.totalTweets}}k</p>
                <img class="card-body-icon" src="https://i.imgur.com/wp77Lzc.png" alt="">
                <p>{{user.totalLiked}}k</p>
            </div>
            <p><span>{{user.totalFollowings}}個跟隨中</span><span>{{user.totalFollowers}}位跟隨者</span></p>
          </div>       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminUserList',
  data() {
    return {
      users: [
        {
          id: 1,
          avatar: "https://i.imgur.com/Lp0dzmV.png",
          account: "string",
          name: "string",
          // email: "string",
          cover: "https://fakeimg.pl/300/",
          // introduction: "string",
          role: "string",
          totalTweets: 1.5,
          totalFollowings: 34,
          totalFollowers: 59,
          totalLiked: 20,
          // updatedAt: "string",
          // createdAt: "string"
        },
        {
          id: 2,
          avatar: "https://i.imgur.com/Lp0dzmV.png",
          account: "string",
          name: "string",
          cover: "https://fakeimg.pl/300/",
          role: "string",
          totalTweets: 1.5,
          totalFollowings: 34,
          totalFollowers: 59,
          totalLiked: 20,
        },
        {
          id: 3,
          avatar: "https://i.imgur.com/Lp0dzmV.png",
          account: "string",
          name: "string",
          cover: "https://fakeimg.pl/300/",
          role: "string",
          totalTweets: 1.5,
          totalFollowings: 34,
          totalFollowers: 59,
          totalLiked: 20,
        },
        {
          id: 4,
          avatar: "https://i.imgur.com/Lp0dzmV.png",
          account: "string",
          name: "string",
          cover: "https://fakeimg.pl/300/",
          role: "string",
          totalTweets: 1.5,
          totalFollowings: 34,
          totalFollowers: 59,
          totalLiked: 20,
        },
        {
          id: 5,
          avatar: "https://i.imgur.com/Lp0dzmV.png",
          account: "string",
          name: "string",
          cover: "https://fakeimg.pl/300/",
          role: "string",
          totalTweets: 1.5,
          totalFollowings: 34,
          totalFollowers: 59,
          totalLiked: 20,
        },
        {
          id: 6,
          avatar: "https://i.imgur.com/Lp0dzmV.png",
          account: "string",
          name: "string",
          cover: "https://fakeimg.pl/300/",
          role: "string",
          totalTweets: 1.5,
          totalFollowings: 34,
          totalFollowers: 59,
          totalLiked: 20,
        },
      ]
    }
  }
}
</script>

<style scoped>
.AdminUserList {
  width: 65%;
  /* width: 1062px; */
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 10px;
  flex-grow: 1;
}
h6 {
  font-weight: 700;
}
.cards {
  position: relative;
  border-top: 1px solid #e6ecf0;
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 15px 0 0 15px;
  width: 250px;
  /* height: 300px; */
  border-radius: 10px;
}
.card-img-top {
  width: 250px;
  height: 140px;
  /* background-color: rgb(136, 136, 136); */
}
.background-img {
  border-radius: 0;
  border-radius: 10px 10px 0 0;
}
.card-body {
  background-color: #F6F7F8;
  padding: 0;
  border: 0;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}
.card-body-icon {
  width: 20px;
  height: 20px;
}

.user-img-container {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -70%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #fff;
}
.user-img {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  width: 92px;
  height: 92px;
}
.card-body-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-body-icon {
  margin: 0 10px;
}
p {
  margin-bottom: 5px;
}
</style>
