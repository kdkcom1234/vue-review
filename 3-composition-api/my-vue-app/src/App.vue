<!-- setup: composition api 사용 -->
<!-- lang="ts" -->
<script setup lang="ts">
import { ref, reactive, VueElement, watchEffect } from 'vue';
import TodoItem from './components/TodoItem.vue';

// ref: 원시데이터값을 가지는 상태
// Proxy로 상태변경을 추적을 하기위해서는 객체가 되어야함
// ref(기본값) -> 기본값 타입의 값을 추적하는데 reactive 객체를 반환함
const memo = ref("");
const input = ref(false);

// reactive: 객체를 추적하는 상태
const todo = reactive<{ memo: string }[]>([]);

const addTodoItem = () => {
  // 스크립트에서는 변수.vaue
  console.log(memo.value);
  todo.unshift({ memo: memo.value });
  memo.value = '';
  // react 상태 객체의 참조가 변경됐지를 추적(jsx element기준이면 key)
  // vue.js 는 리엑티브 객체의 속성값 변경을 추적
}

const removeItem = (index: number) => {
  todo.splice(index, 1);
}

// composition api 에서만 사용가능
// 참조하고 있는 객체가 변경되면 실행이 된다.
watchEffect(() => {
  // 참조하는 객체: memo
  input.value = memo.value !== "";
})

</script>

<template>
  <h2>Todo</h2>
  <input type="text" v-model="memo" @keyup.enter="addTodoItem" />
  <button @click="addTodoItem">add</button>
  <!-- 템플릿에서는 변수명 -->
  {{ memo }}
  <ul>
    <todo-item v-for="(item, index) of todo" :item="item" :index="index" @on-remove="removeItem" />
    <!-- <li v-for="(item, index) of todo">{{ index + " " + item.memo }}</li> -->
  </ul>
  <div v-if="input">
    메모를 입력중입니다.
  </div>
</template>

<style scoped>

</style>
