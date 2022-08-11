<script>
export default {
  data() {
    return {
      count: 0,
      memo: '',
      todo: [{ memo: "vue.js 스터디" }, { memo: 'clean code 스터디' }],
      added: false,
    }
  },
  methods: {
    increment() {
      console.log("--increment--")
      this.count++;
    },
    addTodoItem() {
      // alert(JSON.stringify(this.todo));
      this.todo.unshift({ memo: this.memo });
      // alert(JSON.stringify(this.todo));
      this.added = true;
      this.memo = '';
    },
    removeTodoItem(index) {
      this.todo.splice(index, 1);
    }
  },
}
</script>
<template>
  <h2>Counter</h2>
  <button class="btn" @click="increment">increment</button>
  <div>{{ count }}</div>

  <h2>Form input</h2>
  v-model <input type="text" v-model="memo" /> <br />
  v-bind <input type="text" :value="memo" @input="event => memo = event.target.value" /> <br />
  {{ memo }}

  <h2>List Rendering</h2>

  <ul>
    <li v-for="item of todo">
      {{ item.memo }}
    </li>
  </ul>

  <h2>Conditional Rendering</h2>
  <button @click="added = !added">toggle</button>
  <div v-if="added">1개의 아이템이 추가되었습니다.</div>

  <h2>Todo</h2>
  <input type="text" v-model="memo" /><button @click="addTodoItem">add</button>
  <ul>
    <li v-for="(item, index) of todo" @click="removeTodoItem(index)">
      {{ item.memo }}
    </li>
  </ul>
  <div v-if="added">1개의 아이템이 추가되었습니다.</div>

</template>
<style scoped>
.btn {
  background-color: white;
  border-color: black;
  border-width: 3px;
  cursor: pointer;
}
</style>