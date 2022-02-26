<template>
  <div class="modal-container">
    <div class="user-edit-modal d-flex flex-column">
      <div class="modal-header">
        <button @click.stop.prevent="hideModal">&#215;</button>
      </div>
      <div class="modal-body d-flex"></div>
    </div>
  </div>
</template>

<script>
// TODO: 到Vuex拿取拿取當前使用者資料
const dummyUser = {
  id: 0,
  avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  account: "string",
  name: "string",
  email: "string",
  cover: "string",
  introduction: "string",
  role: "string",
  totalTweets: 0,
  totalFollowings: 0,
  totalFollowers: 0,
  totalLiked: 0,
  updatedAt: "string",
  createdAt: "string",
};

export default {
  data() {
    return {
      currentUser: dummyUser,
    };
  },
  methods: {
    hideModal() {
      // 待優化: 可在關掉時，警告使用者未儲存修改會消失
      this.$emit("after-hide-user-edit-modal");
    },
    handleSubmit() {
      // 字數驗證
      this.hideModal();
    },
  },
  // 待優化: 即時回饋使用者名字是否超過50字，自介超過160字
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/user-edit-modal.scss";
</style>

