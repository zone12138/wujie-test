# wujie-test

## 开发环境

### 主应用

#### 开始

```javascript
main.js

// 引入 wujie
// 与主应用使用的框架相关，vue2的就引入wujie-vue2，vue3的就引入wujie-vue3，react就引入wujie-react
import WujieVue3 from 'wujie-vue3'

// 然后注册
createApp(App).use(WujieVue3).mount("#app")
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
