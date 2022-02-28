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
          v-if="user.isFollowed"
          @click.stop.prevent="deleteIsFollowed(user.id)"
        >
          正在跟隨
        </button>
        <button
          class="button-no-follow"
          v-else
          @click.stop.prevent="addIsFollowed(user.id)"
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
  methods: {
    async fetchUsers() {
      try {
        const { data } = await popularListAPI.getPopularList()
        console.log('fetchUsers')
        this.users = data;
        this.sixUser = data.slice(0, 6);
        this.showCardUsers = this.isActive ? this.users : this.sixUser;
      } catch (error) {
        console.error(error.response)
        Toast.fire({
          icon: 'error',
          title: '無法取得熱門用戶資料，請稍後再試..'
        })
      }
    },
    async addIsFollowed(userId) {
      try {
        console.log("addIsFollow", userId);
        await popularListAPI.addFollowed({id: userId})
        this.showCardUsers = this.showCardUsers.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: true
            }
          } else {
            return {
              ...user
            }
          }
        })
        this.fetchUsers()
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試..'
        })
      }
    },
    async deleteIsFollowed(userId) {
      try {
        console.log("deleteIsFollowed", userId);
        await popularListAPI.DeleteFollowed(userId)
        this.showCardUsers = this.showCardUsers.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: false
            }
          } else {
            return {
              ...user
            }
          }
        })
        this.fetchUsers()
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試..'
        })
      }
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
