# wujie-test

## 开发环境

### 主应用（Vue3)

#### 开始

```javascript
main.js

// 引入 wujie
// 与主应用使用的框架相关，vue2的就引入wujie-vue2，vue3的就引入wujie-vue3，react就引入wujie-react
import WujieVue3 from 'wujie-vue3'

// 然后注册
createApp(App).use(WujieVue3).mount("#app")
```

#### 使用

```js
main.js

// 解构
const { preloadApp, setupApp } = WujieVue3

// 1. 预加载子应用
preloadApp({ name: "vue2", url: "http://localhost:4201/", exec: true, alive: true });

// 2. 设置子应用
setupApp({ name: "vue2", url: "http://localhost:4201/", exec: true, alive: true })

```

```js
 xxxxx.vue - 子应用容器组件

// 需要注意的是，如果是使用上面1.预加载子应用 preloadApp 的话，下方也需要设置一样的属性项，比如：上面设置 alive: true 时，下面不设置 :alive="true"，则不会进入保活模式
<WujieVue height="100%" width="100%" name="vue2" url="http://localhost:4201/" :exec="true" :alive="true"></WujieVue>
```

### 子应用

```javascript
vue.config.js

// 需要加入允许跨域配置
devServe: {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  }
}
```
