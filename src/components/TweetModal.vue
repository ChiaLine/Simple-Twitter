<template>
  <div class="modal-container">
    <div class="tweet-modal d-flex flex-column">
      <div class="modal-header">
        <button @click.stop.prevent="hideModal">&#215;</button>
      </div>
      <div class="modal-body d-flex">
        <div class="mr-3">
          <img :src="avatar" alt="user image" />
        </div>
        <div class="flex-grow-1 d-flex flex-column align-items-end">
          <textarea
            type="text"
            class="flex-grow-1 w-100"
            v-model="tweetContent"
            placeholder="有什麼新鮮事？"
          ></textarea>
          <div>
            <span class="warning">{{ warningContent }}</span>
            <button @click.stop.prevent="handleSubmit">推文</button>
          </div>
        </div>
      </div>
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
      avatar: dummyUser.avatar,
      tweetContent: "",
      warningContent: "",
    };
  },
  methods: {
    hideModal() {
      // 待優化: 可在關掉時，警告使用者未完成推文會消失
      this.tweetContent = "";
      this.warningContent = "";
      this.$emit("after-hide-modal");
    },
    handleSubmit() {
      // 字數驗證
      if (this.tweetContent.trim().length === 0) {
        this.warningContent = "內容不可空白";
        return;
      } else if (this.tweetContent.length > 140) {
        // TODO: 目前的字數計算方式，會在135字左右就被擋
        this.warningContent = "字數不可超過140字";
        return;
      }
      this.warningContent = "";
      // TODO: 發送推文內容至後端伺服器，
      // TODO: 發送成功提示
      console.log(this.tweetContent);
      this.hideModal();
    },
  },
  // 待優化: 即時回饋使用者是否超過140字
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/tweet-modal.scss";
</style>

