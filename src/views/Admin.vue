<template>
  <div class="admin w-100 d-flex justify-content-center">
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
    height: 100%;
  }
</style>