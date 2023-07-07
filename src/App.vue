<template>
  <div>
    <Header />
    <RouterView />
  </div>
  <v-app ref="app">
    <v-app-bar color="grey-lighten-2" name="app-bar" class="justify-center">
      <div class="d-flex justify-center align-center w-100">
        <v-btn @click="print('app-bar')">Get data</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent name="drawer">
      <div class="d-flex justify-center align-center h-100">
        <v-btn @click="print('drawer')">Get data</v-btn>
      </div>
    </v-navigation-drawer>
    <v-main>
      <v-card height="200px"></v-card>
    </v-main>
  </v-app>
</template>
<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router'

// import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped></style>
