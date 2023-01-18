# vue-myapp-composition

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

--- 프로젝트

1. create-vue로 프로젝트 생성

- https://vuejs.org/guide/quick-start.html

```sh
npm init vue@latest
```

2. router 구조

```ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
  ],
});

export default router;
```

3. main.ts에 router 셋업

```ts
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
```

4. router의 사용

```ts
<router-link /> // 링크 엘리먼트
<router-view /> // view 표시 영역
useRouter(); // routing 프로그래밍방식으로 처리
useRoute() // 경로 정보 조회
```

```ts
<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

const router = useRouter(); // 탐색처리
const route = useRoute(); // 경로

const handleRedirect = (path: string) => {
  router.push(path);
}

</script>

<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <button @click="handleRedirect('/about')">go to about</button>
      </nav>
      {{ route.fullPath }}
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

```

5. pinia store 구조

-- option 스타일

```ts
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

-- composition 스타일

```ts
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
```

6. main.ts에 pinia store 셋업

```ts
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
```

7. pinia store 사용

```ts
// 상태조회
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
```
