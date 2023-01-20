import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "ABC" }),
  actions: {
    increment() {
      this.count++;
    },
    changeName(name: string) {
      this.name = name;
    },
  },
});
