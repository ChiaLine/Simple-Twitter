<template>
  <div class="popular" :class="{ active: isActive }">
    <h6 class="popular-title">Popular</h6>
    <div class="popular-card">
      <div
        class="card-body"
        v-for="(user) in showCardUsers"
        :key="user.id"
        :class="{ active: isActive }"
      >
        <div class="card-left">
          <div class="card-img">
            <img :src="user.img | emptyImage" />
          </div>
          <div class="card-text">
            <p class="text-top">{{ user.name }}</p>
            <p class="text-bottom">@{{ user.name2 }}</p>
          </div>
        </div>
        <button
          class="button-is-follow"
          v-if="user.isFollow"
          @click.stop.prevent="deleteIsFollow(user.id)"
        >
          正在跟隨
        </button>
        <button
          class="button-no-follow"
          v-else
          @click.stop.prevent="addIsFollow(user.id)"
        >
          跟隨
        </button>
      </div>
    </div>
    <button
      class="card-button"
      v-show="!isActive"
      @click.stop.prevent="addCards"
    >
      顯示更多
    </button>
  </div>
</template>

<script>
import popularListAPI from "../apis/popularList";
import { Toast } from "../utils/helpers";
import { emptyImageFilter } from '../utils/mixins'

export default {
  name: "PopularUsers",
  mixins: [ emptyImageFilter ],
  data() {
    return {
      users: [],
      sixUser: [],
      showCardUsers: [],
      isActive: false,
    };
  },
  created() {
    this.fetchUsers();
  },
  // computed: {
  //   showCardUsers(){
  //     return this.isActive ? this.users : this.sixUser
  //   }
  // },
  methods: {
    async fetchUsers() {

      try {
        const response = await popularListAPI.getPopularList()
        const { data } = response
        console.log(response)
        console.log(data)
        // 若請求過程有錯，則進到錯誤處理
        // if (response.status !== 200) {
        //   throw new Error(data.methods)
        // }

        this.users = data;
        this.sixUser = data.slice(0, 6);
        this.showCardUsers = this.isActive ? this.users : this.sixUser;

      } catch (error) {
        console.error(error.response)
        Toast.fire({
          icon: 'error',
          title: '無法取得熱門用戶資料，請稍後再試..'
          // title: error.response.data.message
        })
      }
    },
    addIsFollow(userId) {
      console.log("addIsFollow", userId);
      this.showCardUsers = this.showCardUsers.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isFollow: true
          }
        } else {
          return {
            ...user
          }
        }
      })
    },
    deleteIsFollow(userId) {
      console.log("deleteIsFollow", userId);
      this.showCardUsers = this.showCardUsers.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isFollow: false
          }
        } else {
          return {
            ...user
          }
        }
      })
    },
    addCards() {
      console.log("addCards");
      this.isActive = true;
      this.showCardUsers = this.isActive ? this.users : this.sixUser;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/popular.scss";
</style>
