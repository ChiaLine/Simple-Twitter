<template>
  <div class="modal-container">
    <div class="user-edit-modal">
      <form
        @submit.stop.prevent="handleSubmit"
        class="h-100 d-flex flex-column"
      >
        <div class="modal-header align-items-center">
          <button @click.stop.prevent="hideModal">&#215;</button>
          <p class="flex-grow-1">編輯個人資料</p>
          <button type="submit" class="save-button">儲存</button>
        </div>
        <div class="modal-body flex-grow-1 d-flex flex-column">
          <div class="photo-area">
            <!-- cover 區塊 -->
            <div class="cover-form-group">
              <label for="cover" class="d-none"></label>
              <img :src="currentUser.cover" class="cover" alt="user cover" />
              <input
                id="cover"
                type="file"
                name="cover"
                accept="image/*"
                class="input-image"
                @change="changeCover"
              />
            </div>
            <!-- avatar 區塊 -->
            <div class="avatar-form-group">
              <label for="avatar" class="d-none"></label>
              <img :src="currentUser.avatar" class="avatar" alt="user avatar" />
              <input
                id="avatar"
                type="file"
                name="avatar"
                accept="image/*"
                class="input-image"
                @change="changeAvatar"
              />
            </div>
          </div>
          <div class="text-area flex-grow-1 d-flex flex-column">
            <!-- 名稱區塊 -->
            <div class="mb-4 d-flex flex-column">
              <div
                class="input-container d-flex flex-column"
                :class="{ 'warning-border': nameWarningOn }"
              >
                <label for="name">名稱</label>
                <textarea
                  v-model="currentUser.name"
                  name="name"
                  id="name"
                  rows="1"
                ></textarea>
              </div>
              <div class="d-flex justify-content-between">
                <p class="warning-text">{{ getNameWarning }}</p>
                <p class="word-limit">
                  {{ getNameLength }}/ {{ nameLengthLimit }}
                </p>
              </div>
            </div>
            <!-- 自我介紹區塊 -->
            <div class="flex-grow-1 d-flex flex-column">
              <div
                class="input-container flex-grow-1 d-flex flex-column"
                :class="{ 'warning-border': introWarningOn }"
              >
                <label for="introduction">自我介紹</label>
                <textarea
                  v-model="currentUser.introduction"
                  name="introduction"
                  id="introduction"
                  class="flex-grow-1"
                ></textarea>
              </div>
              <div class="d-flex justify-content-between">
                <p class="warning-text">{{ getIntroWarning }}</p>
                <p class="word-limit">
                  {{ getIntroLength }}/{{ introLengthLimit }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";

// TODO: 從Vuex或props(userSelf頁面)拿取當前使用者資料
const dummyUser = {
  account: "root",
  avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  cover: "https://i.imgur.com/QR8rP9R.jpg",
  createdAt: "2022-02-24T09:22:31.000Z",
  email: "root@example.com",
  id: 4,
  introduction: "Hello! I am Root. Nice to meet you!",
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
      nameLengthLimit: 50,
      introLengthLimit: 160,
    };
  },
  methods: {
    hideModal() {
      // 待優化: 可在關掉時，警告使用者未儲存修改會消失
      this.$emit("after-hide-user-edit-modal");
    },
    handleSubmit(e) {
      // 字數驗證
      if (this.nameWarningOn || this.introWarningOn) {
        Toast.fire({
          icon: "warning",
          title: "字數不符合規定",
        });
        return;
      }
      // 拿取表單資料
      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
      // TODO: 串接API送出表單資料

      // 關閉modal並發送成功通知
      this.hideModal();
      Toast.fire({
        icon: "success",
        title: "成功修改個人資料！",
      });
    },
    // 圖片上傳相關功能
    changeCover(e) {
      const { files } = e.target;
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.currentUser.cover = imageURL;
      }
    },
    changeAvatar(e) {
      const { files } = e.target;
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.currentUser.avatar = imageURL;
      }
    },
    // input warning 判別功能
    createWarningText(inputLength, limit) {
      if (inputLength <= 0) {
        return "內容不可空白！";
      } else if (inputLength > limit) {
        return "字數超出上限！";
      } else {
        return "";
      }
    },
  },
  // 待優化: 字數計算會加入換行符號，因此換行後有誤差
  computed: {
    // 取得即時字數
    getNameLength() {
      return this.currentUser.name.trim().length;
    },
    getIntroLength() {
      return this.currentUser.introduction.trim().length;
    },
    // 取得即時警告狀態
    nameWarningOn() {
      const length = this.currentUser.name.trim().length;
      return length <= 0 || length > this.nameLengthLimit;
    },
    introWarningOn() {
      const length = this.currentUser.introduction.trim().length;
      return length <= 0 || length > this.introLengthLimit;
    },
    // 取得即時警告內容
    getNameWarning() {
      return this.createWarningText(
        this.currentUser.name.trim().length,
        this.nameLengthLimit
      );
    },
    getIntroWarning() {
      return this.createWarningText(
        this.currentUser.introduction.trim().length,
        this.introLengthLimit
      );
    },
  },
};

// 待優化：關閉modal再打開，是否要回到未修改的使用者資料內容？（重新拉資料）
</script>

<style lang="scss" scoped>
@import "../assets/scss/user-edit-modal.scss";
</style>


