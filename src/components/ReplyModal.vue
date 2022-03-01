<template>
  <div class="modal-container">
    <div class="reply-modal d-flex flex-column">
      <div class="modal-header">
        <button @click.stop.prevent="hideModal">&#215;</button>
      </div>
      <div class="modal-body d-flex flex-column">
        <!-- 被回覆留言區塊 -->
        <div class="replied-tweet d-flex">
          <div class="mr-3 d-flex flex-column align-items-center">
            <img :src="tweet.tweetedUser.avatar" alt="tweetedUserAvatar" />
            <div class="flex-grow-1 my-2 decorated-line"></div>
          </div>
          <div>
            <div class="mb-1">
              <span class="name mr-1">{{ tweet.tweetedUser.name }}</span>
              <span class="tag-group">
                <span>@{{ tweet.tweetedUser.name }}</span>
                <span class="mx-1">&#8901;</span>
                <span>{{ tweet.createdAt }}</span>
              </span>
            </div>
            <p class="description">{{ tweet.description }}</p>
            <p class="reply-target my-3">
              回覆給<span class="orange-name ml-1"
                >@{{ tweet.tweetedUser.name }}</span
              >
            </p>
          </div>
        </div>
        <!-- 新增留言區塊 -->
        <div class="writing-tweet flex-grow-1 d-flex">
          <div class="mr-3">
            <img :src="avatar" alt="user image" />
          </div>
          <div class="flex-grow-1 d-flex flex-column align-items-end">
            <textarea
              type="text"
              class="flex-grow-1 pt-2 w-100"
              v-model="tweetContent"
              placeholder="推你的回覆"
            ></textarea>
            <div>
              <span class="warning">{{ warningContent }}</span>
              <button @click.stop.prevent="handleSubmit">回覆</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: 用props傳入被回覆的tweet資料
const dummyTweet = {
  id: 0,
  description:
    "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
  totalLikes: 0,
  totalReplies: 0,
  UserId: 0,
  isLiked: true,
  updatedAt: "3小時",
  createdAt: "3小時",
  tweetedUser: {
    id: 0,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    account: "string",
    name: "Apple",
    email: "string",
    cover: "string",
    introduction: "string",
    role: "string",
    totalTweets: 0,
    totalFollowings: 0,
    totalFollowers: 0,
    totalLiked: 0,
  },
};

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
  props: {
    replyUserId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      tweet: dummyTweet,
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
      this.$emit("after-hide-reply-modal");
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
@import "../assets/scss/reply-modal.scss";
</style>

