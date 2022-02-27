<template>
  <div class="AdminUserList">
    <div>
      <h6 class="m-3">使用者列表</h6>
      <div class="cards">
        <div class="card" v-for="user in users" :key="user.id">
          <div class="card-img-top">
            <img class="background-img" :src="user.cover | emptyImage" alt="">
          </div>
          <div class="user-img-container">
            <img class="user-img" :src="user.avatar | emptyImage" alt="">
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
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
import { emptyImageFilter } from '../utils/mixins'


export default {
  name: 'AdminUserList',
  mixins: [ emptyImageFilter ],
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
       try {
        const response = await adminAPI.getUsersList()
        const { data } = response
        console.log(data)

        // 若請求過程有錯，則進到錯誤處理
        // if (response.status !== 200) {
        //   throw new Error(data.methods)
        // }

        this.users = data
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
.AdminUserList {
  width: 65%;
  height: 100%;
  overflow-y: scroll;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-right: 10px;
  flex-grow: 1;
}
h6 {
  font-weight: 700;
  font-size: 18px;
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
  border-radius: 10px;
}
.card-img-top {
  width: 250px;
  height: 140px;
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
