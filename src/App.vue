<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>
<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router'

// import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped></style>
