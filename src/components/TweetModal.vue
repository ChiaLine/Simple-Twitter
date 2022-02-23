<template>
  <div class="modal-container">
    <div class="tweet-modal d-flex flex-column">
      <div class="modal-header">
        <button @click.stop.prevent="hideModal">&#215;</button>
      </div>
      <div class="modal-body d-flex">
        <div class="mr-3">
          <img
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="user image"
          />
        </div>
        <div class="flex-grow-1 d-flex flex-column align-items-end">
          <textarea
            type="text"
            class="flex-grow-1 w-100"
            placeholder="有什麼新鮮事？"
            required
          ></textarea>
          <div>
            <button>推文</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideModal() {
      this.$emit("after-hide-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/tweet-modal.scss";
</style>

