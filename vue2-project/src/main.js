import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import VueRouter from "vue-router";
import router from "./router/index";

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(ElementUI);
import "./style/index.scss";
import "element-ui/lib/theme-chalk/index.css";

import { subscribe, stopSubscribe } from '@/busEvents/index'

function setup() {
  return new Vue({
    render: (h) => h(App),
    router,
  }).$mount("#app");
}

if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    instance = setup();
    subscribe()
  };
  window.__WUJIE_UNMOUNT = () => {
    instance?.$destroy();
    stopSubscribe();
  };
} else {
  setup();
}
