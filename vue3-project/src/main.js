import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index";

import ElementPlus from "element-plus";
import "@/style/index.scss";
import 'element-plus/dist/index.css'
import "element-plus/theme-chalk/dark/css-vars.css";

import { subscribe, stopSubscribe } from "@/busEvents/subscribe";

function setup() {
  return createApp(App).use(router).use(ElementPlus).mount("#app");
}

if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    instance = setup();
    subscribe();
    // wujie@1.0.22 目前看着无法将html标签中的属性带上去，所以需要手动给它设置一下属性
    window?.__WUJIE_RAW_WINDOW__?.document?.documentElement?.setAttribute("class", "dark")
  };
  window.__WUJIE_UNMOUNT = () => {
    instance?.unmount();
    stopSubscribe();
  };
} else {
  setup();
}
