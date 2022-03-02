// src/views/Regist.vue
<template>
  <div class="container d-flex flex-column align-items-center">
    <img class="logo" src="https://i.imgur.com/WwFWS1D.png" alt="" />
    <h1 class="title">建立你的帳號</h1>
    <SetProfile @after-submit="handleAfterSubmit" />
    <div class="link-group">
      <router-link
        v-for="tab in tabs"
        :key="tab.id"
        :to="tab.path"
        class="link"
      >
        {{ tab.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import SetProfile from "./../components/SetProfile";
import registerAPI from "./../apis/register";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    SetProfile,
  },
  data() {
    return {
      tabs: [
        {
          name: "取消",
          path: "/Login",
          id: 1,
        },
      ],
    };
  },
  methods: {
    async handleAfterSubmit([account, name, email, password, checkPassword]) {
      try {
        const response = await registerAPI.register({
          account,
          name,
          email,
          password,
          checkPassword,
        });
        console.log(response);
        this.$router.push("/");
      } catch (e) {
        Toast.fire({
          icon: "error",
          title: e.response.data.message,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/register-login.scss";
</style>