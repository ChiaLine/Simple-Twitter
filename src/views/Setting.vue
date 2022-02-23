<template>
  <div class="w-100 h-100 d-flex justify-content-end">
    <NavBar />
    <div class="right">
      <h5 class="title p-3">帳戶設定</h5>
      <h3 class="p-3">放修改表單區</h3>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'Setting',
  components: {
    NavBar,
  },
}
</script>

<style scoped>
  .right {
    width: 75%;
    border-radius: 5px;
    border-left: 1px solid #E6ECF0;
    /* background-color: rgb(238, 236, 234); */
  }
  .title {
    border-bottom: 1px solid #E6ECF0;
  }
</style>