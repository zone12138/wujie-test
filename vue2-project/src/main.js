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

function setup() {
  return new Vue({
    render: (h) => h(App),
    router,
  }).$mount("#app");
}

if (window.__POWERED_BY_WUJIE__) {
  let instance;
  const changeRoute = (path = "") => {
    path = path.replace("/vue2", "");
    router.replace({ path }).catch(() => {});
  };
  window.__WUJIE_MOUNT = () => {
    instance = setup();
    window.$wujie?.bus.$on("change-child-route", changeRoute);
    console.log(instance)
  };
  window.__WUJIE_UNMOUNT = () => {
    instance?.$destroy();
    window.$wujie?.bus.$off("change-child-route", changeRoute);
  };
} else {
  setup();
}
