<!-- script setup === composition api를 사용 -->
<!-- lang="ts" === typescript를 사용 -->
<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue';
import TodoItem from './components/TodoItem.vue';

// 원시데이터값 가능
const memo = ref("");
// 객체구조만 가능
const todo = reactive<{ memo: string }[]>([]);
const input = ref(false);

const addTodoItem = () => {
  // ref는 value로 접근해야함
  // reactive는 직접 접근 가능
  todo.unshift({ memo: memo.value })
  memo.value = "";
}

const removeTodoItem = (index: number) => {
  console.log(index);
  todo.splice(index, 1);
}

// 함수내의 ref/reactive 변수가 변경됨에 따라서 실행됨
watchEffect(() => {
  input.value = memo.value !== ""
})

</script>

<template>
  <h2>Todo</h2>
  <!-- 템플릿에서는 ref에 value로 접근할 필요 없음 -->
  <input type="text" v-model="memo" /><button @click="addTodoItem">add</button>
  <ul>
    <!-- 일반 html페이지와의 호환성을 위해서 케밥케이스도 지원함 -->
    <todo-item v-for="(item, index) of todo" :item="item" :index="index" @on-remove="removeTodoItem" />
  </ul>
  <div v-if="input">
    메모를 입력중입니다.
  </div>
</template>

<style scoped>
</style>
