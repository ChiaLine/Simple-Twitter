// src/components/LoginForm.vue
// 給Login.vue、AdminLogin.vue使用
<template>
  <form
    @submit.prevent="submit"
    class="d-flex flex-column align-items-center w-100"
  >
    <div
      v-for="form in forms"
      :key="form.id"
      class="position-relative w-100 my-3 form-group"
    >
      <label class="position-absolute label" :for="form.category">{{
        form.label
      }}</label>
      <input
        v-model="form.data"
        :id="form.category"
        class="w-100 input"
        type="text"
        required
      />
    </div>
    <button class="btn login-btn w-100" @click="adminsSubmit">登入</button>
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
          data: "",
          id: 1,
        },
        {
          label: "密碼",
          category: "password",
          data: "",
          id: 2,
        },
      ],
    };
  },
  methods: {
    submit() {
      const account = this.forms[0].data;
      const password = this.forms[1].data;
      this.$emit("handleSubmit", account, password);
    },
    adminsSubmit() {
      const account = this.forms[0].data;
      const password = this.forms[1].data;
      this.$emit("handle-admin-submit", account, password);
    },
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/register-login.scss";
</style>
