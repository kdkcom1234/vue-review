<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ counter.count }}
    {{ counter.name }}
  </div>
</template>

<style>

</style>
