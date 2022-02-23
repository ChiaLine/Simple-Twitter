// src/components/SetProfile.vue
// 給Regist.vue使用
<template>
  <form class="d-flex flex-column align-items-center w-100">
    <div
      v-for="form in forms"
      :key="form.id"
      class="position-relative w-100 my-3 form-group"
    >
      <label class="position-absolute label" :for="form.category">{{
        form.label
      }}</label>
      <input :id="form.category" class="w-100 input" type="text" />
    </div>
    <button class="btn login-btn w-100">註冊</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      forms: [
        {
          label: "帳號",
          category: "account",
          id: 1,
        },
        {
          label: "名稱",
          category: "name",
          id: 2,
        },
        {
          label: "Email",
          category: "email",
          id: 3,
        },
        {
          label: "密碼",
          category: "password",
          id: 4,
        },
        {
          label: "密碼確認",
          category: "password-check",
          id: 5,
        },
      ],
    };
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/register-login.scss";
</style>
