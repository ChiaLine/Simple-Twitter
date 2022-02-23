<template>
  <div class="container d-flex flex-column align-items-center">
    <img class="logo" src="https://i.imgur.com/WwFWS1D.png" alt="" />
    <h1 class="title">後台登入</h1>
    <LoginForm />
    <div class="link-group align-self-end">
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
import LoginForm from "./../components/LoginForm";

export default {
  components: {
    LoginForm,
  },

  data() {
    return {
      tabs: [
        {
          name: "前台登入",
          path: "/Login",
          id: 1,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/register-login.scss";
</style>