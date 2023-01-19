<script setup lang="ts">
// 컴포넌트의 속성 정의
const { item, index } = defineProps<{ item: { memo: string }, index: number }>();
// 이벤트 선언
const emit = defineEmits<{
  (e: 'onRemove', index: number): void,
  (e: 'onUpdate', index: number): void
}>();

</script>
<template>
  <li @click="emit('onRemove', index)">{{ index + " " + item.memo }}</li>
</template>
<style>

</style>