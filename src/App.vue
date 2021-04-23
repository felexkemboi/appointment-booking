<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    localStorage.setItem("loggedUser", "Philemon")
  }
}
</script>
