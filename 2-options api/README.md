# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


-- vue.js 사용사례
1. jobkorea
- react vs vue
- react native
- web 5:4
  - 삼성계열사, 판교쪽회사들, 금융쪽, java/vue 풀스택
  - 웹 중심사업, 고전적인 사업, 특정 회사벤더 의존성 낮은 것을 선호

2. 사용사례
- 네이버 카페
- 네이버 바이브
- 다음 카페
- 위메프
  - composition api
- 카카오뱅크
 - https://kr.linkedin.com/in/taehoon-song-44912a169
- Snapshot(블록체인 커뮤니티 proposal/voting)
 - https://github.com/snapshot-labs/snapshot
 - https://snapshot.org/#/

3. rocket punch
- react native
- flutter


--- 프로젝트 
1. vite에 vue-ts 템플릿으로 프로젝트 생성
- https://vitejs.dev/guide/#scaffolding-your-first-vite-project
- yarn create vite my-vue-app --template vue

2. vite 프로젝트 구조
- https://vitejs.dev/guide/#index-html-and-project-root
- index.html, main.js

3. single file component
- https://vuejs.org/guide/scaling-up/sfc.html
- .vue, 
- script/template/style, 
- scoped css
- export default {},

4. options api and template
- data() {return{}}
- template handlebar {{}}
- methods
- event

5. vue.js의 reactivity
- https://vuejs.org/guide/essentials/reactivity-fundamentals.html
- https://vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity
- 객체 proxy를 이용하여 속성값을 set할 때 추가적인 처리를 함

6. Form Input Bindings 
- v-model 양방향 바인딩, v-bind 단방향 바인딩
- input :value
- input v-model

7. List Rendering
- v-for="item of collections"

8. Conditional Rendering
- v-if, v-show