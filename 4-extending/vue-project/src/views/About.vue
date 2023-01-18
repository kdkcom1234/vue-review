<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();

</script>
<template>
  <div>
    <h1>This is an about page</h1>
    <div>
      {{ counter.count }}
    </div>
  </div>
</template>