<script>
// options api vue 2.x 기본, 현재도 문서는 기본이지만
// 프로젝트 셋업을 할 때나 라이브러리 처음 추가할 때는 기본은 안해줌
export default {
  // 상태변수 선언
  // state === reactivity
  data() {
    return {
      count: 0,
      memo: "",
      todo: [{ memo: 'vue.js study' }, { memo: 'clean code study' }],
      added: false,
      added2: '',
    }
  },
  // 이벤트 함수, 그외 메소드
  methods: {
    increment() {
      // 상태값 변경
      // 상태값을 바로 변경
      this.count++;
    }
  },
}
</script>

<template>
  <h2>Counter</h2>
  <button class="btn" @click="increment()">increment</button>
  <div>{{ count }}</div>

  <!-- v-xxx : directive -->
  <h2>Form input</h2>
  <!-- v-model 값 속성과 연결, 양방향(script <-> template) -->
  v-model <input type="text" v-model="memo"> <br>
  <!-- v-bind는 일반적인 대부분의 속성과 연결, 단방향(script -> template) -->
  v-bind <input type="text" :value="memo" @input="event => memo = event.target.value"> <br>
  {{ memo }}

  <h2>List Rendering</h2>
  <ul>
    <li v-for="(item, index) in todo">
      {{ index + item.memo }}
    </li>
  </ul>

  <h2>Conditional Rendering</h2>
  <button class="btn" @click="added2 = !added2 ? 'aa' : ''">toggle</button>
  <div v-if="added2">토글 패널</div>

</template>

<style scoped>
.btn {
  background-color: green;
}
</style>
