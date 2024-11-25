import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index";

import ElementPlus from "element-plus";
import "@/style/index.scss";
import "element-plus/theme-chalk/dark/css-vars.css";

import { subscribe, stopSubscribe } from "@/busEvents/index";

function setup() {
  return createApp(App).use(router).use(ElementPlus).mount("#app");
}

if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    instance = setup();
    subscribe();
  };
  window.__WUJIE_UNMOUNT = () => {
    instance?.unmount();
    stopSubscribe();
  };
} else {
  setup();
}
