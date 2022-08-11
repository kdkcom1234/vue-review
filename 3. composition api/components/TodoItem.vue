<script setup lang="ts">
// 속성 선언
const { item, index } = defineProps<{ item: { memo: string }, index: number }>();
// 이벤트 선언
const emit = defineEmits<{
  (e: 'onRemove', index: number): void
  (e: 'onUpdate', index: number): void
}>();
</script>
<template>
  <!-- 이벤트 호출 -->
  <li @click="emit('onRemove', index)">
    {{ item.memo }}
  </li>
</template>
<style>
</style>