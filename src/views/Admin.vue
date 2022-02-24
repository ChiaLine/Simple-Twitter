<template>
  <div class="admin w-100 h-100 d-flex justify-content-center">
    <AdminNavBar />
    <router-view />
  </div>
</template>

<script>
import AdminNavBar from '../components/AdminNavBar.vue'

export default {
  name: 'Admin',
  components: {
    AdminNavBar,
  }
}
</script>

<style scoped>
  .admin {
    /* width: 40%; */
    border-radius: 5px;
    border: 1px solid #E6ECF0;
    /* background-color: rgb(238, 236, 234); */
  }
</style>