// src/components/SetProfile.vue
// 給Regist.vue使用
<template>
  <form
    class="d-flex flex-column align-items-center w-100"
    @submit.stop.prevent="afterSubmit"
  >
    <div
      v-for="form in forms"
      :key="form.id"
      class="position-relative w-100 my-3 form-group"
    >
      <label class="position-absolute label" :for="form.category">
        {{ form.label }}
      </label>
      <input
        v-model="form.data"
        @focusout="wordLimit(form.data)"
        :id="form.id"
        class="w-100 input"
        :type="form.category"
        :name="form.category"
        required
      />
      <span
        class="position-absolute warning"
        v-show="isNameWarning"
        v-if="form.category === 'name'"
        >{{ nameWarning }}</span
      >
    </div>
    <button v-if="isRegistered()" class="btn save-btn align-self-end mx-0">
      儲存
    </button>
    <button v-else class="btn login-btn w-100">註冊</button>
  </form>
</template>

<script>
// import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      forms: [
        {
          label: "帳號",
          category: "account",
          id: 1,
          data: "",
        },
        {
          label: "名稱",
          category: "name",
          id: 2,
          data: "",
        },
        {
          label: "Email",
          category: "email",
          id: 3,
          data: "",
        },
        {
          label: "密碼",
          category: "password",
          id: 4,
          data: "",
        },
        {
          label: "密碼確認",
          category: "password",
          id: 5,
          data: "",
        },
      ],
      accountWarning: "",
      nameWarning: "字數超出上限!",
      isNameWarning: false,
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
    wordLimit(data) {
      if (data.length > 50) {
        event.target.classList.add("error");
        console.log(event.target.classList);
        this.isNameWarning = true;
      } else {
        event.target.classList.remove("error");
        this.isNameWarning = false;
      }
    },
    afterSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      const userData = [];
      for (let value of formData.values()) {
        userData.push(value);
      }
      this.$emit("after-submit", userData);
    },
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/register-login.scss";
</style>
