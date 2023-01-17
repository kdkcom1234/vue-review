<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

const router = useRouter();
const route = useRoute();

const handleRedirect = (path: string) => {
  router.push(path);
}

</script>

<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <button @click="handleRedirect('/about')">go to about</button>
      </nav>
      {{ route.fullPath }}
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 8px;
}
</style>
