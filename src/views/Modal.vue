<template>
  <div>
    <h1>Modal</h1>
    <button @click.stop.prevent="modalOn">TweetModal</button>
    <TweetModal v-show="showModal" @after-hide-modal="modalOff"/>
  </div>
</template>

<script>
import TweetModal from "../components/TweetModal.vue";
export default {
  components: {
    TweetModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    modalOn() {
      this.showModal = true;
    },
    modalOff() {
      this.showModal = false;
    }
  },
};
</script>

<style lang="css" scoped>
button {
  border: 1px solid red;
}
</style>