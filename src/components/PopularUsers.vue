<template>
  <div class="popular">
    <h6 class="title">Popular</h6>
    <div class="popular-card">
      <div class="card-body" v-for="(user, index) in users" :key="user.id">
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
          @click.stop.prevent="deleteIsFollow(index)"
        >
          正在跟隨
        </button>
        <button
          class="button-no-follow"
          v-else
          @click.stop.prevent="addIsFollow(index)"
        >
          跟隨
        </button>
      </div>
    </div>
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
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyData
      this.users = users
    },
    addIsFollow(index) {
      console.log("addIsFollow", index);
      this.users[index].isFollow = true;
    },
    deleteIsFollow(index) {
      console.log("deleteIsFollow", index);
      this.users[index].isFollow = false;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/popular.scss";
</style>
