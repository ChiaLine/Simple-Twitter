// src/components/SetProfile.vue
// 給Regist.vue使用
<template>
  <form class="d-flex flex-column align-items-center w-100">
    <div
      v-for="form in forms"
      :key="form.id"
      class="position-relative w-100 my-3 form-group"
    >
      <label class="position-absolute label" :for="form.category">
        {{ form.label }}
      </label>
      <input :id="form.category" class="w-100 input" type="text" />
    </div>
    <button v-if="isRegistered()" class="btn save-btn align-self-end mx-0">
      儲存
    </button>
    <button v-else class="btn login-btn w-100">註冊</button>
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
  methods: {
    isRegistered() {
      if (this.$route.name === "Regist") {
        return false;
      } else if (this.$route.name === "Setting") {
        return true;
      }
    },
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/register-login.scss";
</style>
