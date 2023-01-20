<script setup lang="ts">
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { useCounterStore } from './stores/counter';

const router = useRouter();
const routes = useRoute();
const counter = useCounterStore();

const handleNavigate = (e: MouseEvent) => {
  console.log(e);
  router.push("/about");


}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <button @click="handleNavigate">navigate to about</button>
        {{ routes.fullPath }}
        <button @click="counter.increment()">increment</button>
        <button @click="counter.changeName('DEF')">change</button>
      </nav>
    </div>
  </header>
  <router-view />
</template>