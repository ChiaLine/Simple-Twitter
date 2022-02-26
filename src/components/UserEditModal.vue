<template>
  <div class="modal-container">
    <div class="user-edit-modal d-flex flex-column">
      <form>
        <div class="modal-header align-items-center">
          <button @click.stop.prevent="hideModal">&#215;</button>
          <p class="flex-grow-1">編輯個人資料</p>
          <button class="save-button">儲存</button>
        </div>
        <div class="modal-body d-flex">
          <div class="photo-area">
            <div class="cover-form-group">
              <label for="cover" class="d-none"></label>
              <img :src="currentUser.cover" class="cover" alt="user cover" />
              <input
                id="cover"
                type="file"
                name="cover"
                accept="image/*"
                class="input-image"
                @change="handleCoverFileChange"
              />
            </div>
            <div class="avatar-form-group">
              <label for="avatar" class="d-none"></label>
              <img :src="currentUser.avatar" class="avatar" alt="user avatar" />
              <input
                id="avatar"
                type="file"
                name="avatar"
                accept="image/*"
                class="input-image"
                @change="handleAvatarFileChange"
              />
            </div>
          </div>
          <div class="text-area"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// TODO: 到Vuex拿取拿取當前使用者資料
const dummyUser = {
  account: "root",
  avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  cover: "https://i.imgur.com/QR8rP9R.jpg",
  createdAt: "2022-02-24T09:22:31.000Z",
  email: "root@example.com",
  id: 4,
  introduction: null,
  name: "root",
  role: "admin",
  totalFollowers: 0,
  totalFollowings: 0,
  totalLiked: 0,
  totalTweets: 0,
  updatedAt: "2022-02-24T09:22:31.000Z",
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

