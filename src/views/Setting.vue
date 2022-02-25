<template>
  <div class="h-100 d-flex justify-content-end">
    <NavBar />
    <div class="right">
      <h5 class="title p-3">帳戶設定</h5>
      <div class="setProfile">
        <SetProfile class="p-3" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SetProfile from "../components/SetProfile.vue";

export default {
  name: "Setting",
  components: {
    NavBar,
    SetProfile,
  },
};
</script>

<style scoped>
.right {
  width: 75%;
  border-radius: 5px;
  border-left: 1px solid #e6ecf0;
  /* background-color: rgb(238, 236, 234); */
}
.title {
  border-bottom: 1px solid #e6ecf0;
}
.setProfile {
  max-width: 60%;
}
</style>
