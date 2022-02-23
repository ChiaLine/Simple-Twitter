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
            <img :src="user.img" />
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
      @click.stop.prevent="addCaers"
    >
      顯示更多
    </button>
  </div>
</template>

<script>
const dummyData = {
  users: [
    {
      id: 1,
      name: "Pizza Hut",
      name2: "pizzahut",
      img: "https://fakeimg.pl/300/",
      isFollow: true,
    },
    {
      id: 2,
      name: "McDonald",
      name2: "McDonald",
      img: "https://fakeimg.pl/300/",
      isFollow: false,
    },
    {
      id: 3,
      name: "Bank of America",
      name2: "BankofAmerica",
      img: "https://fakeimg.pl/300/",
      isFollow: false,
    },
    {
      id: 4,
      name: "Bank of America",
      name2: "BankofAmerica",
      img: "https://fakeimg.pl/300/",
      isFollow: false,
    },
    {
      id: 5,
      name: "Bank of America",
      name2: "BankofAmerica",
      img: "https://fakeimg.pl/300/",
      isFollow: false,
    },
    {
      id: 6,
      name: "Bank of America",
      name2: "BankofAmerica",
      img: "https://fakeimg.pl/300/",
      isFollow: false,
    },
    {
      id: 7,
      name: "Bank of America",
      name2: "BankofAmerica",
      img: "https://fakeimg.pl/300/",
      isFollow: false,
    },
    {
      id: 8,
      name: "Bank of America",
      name2: "BankofAmerica",
      img: "https://fakeimg.pl/300/",
      isFollow: false,
    },
    {
      id: 9,
      name: "Bank of America",
      name2: "BankofAmerica",
      img: "https://fakeimg.pl/300/",
      isFollow: false,
    },
    {
      id: 10,
      name: "Bank of America",
      name2: "BankofAmerica",
      img: "https://fakeimg.pl/300/",
      isFollow: false,
    },
  ],
};

export default {
  name: "PopularUsers",
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
    fetchUsers() {
      const { users } = dummyData;
      this.users = users;
      this.sixUser = users.slice(0, 6);
      this.showCardUsers = this.isActive ? this.users : this.sixUser;
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
    addCaers() {
      console.log("addCaers");
      this.isActive = true;
      this.showCardUsers = this.isActive ? this.users : this.sixUser;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/popular.scss";
</style>
