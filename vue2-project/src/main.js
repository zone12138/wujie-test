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
    const prefix = window?.__WUJIE?.id;
    if (typeof prefix === "string") {
      if (path.indexOf(`/${prefix}/`) === 0) {
        path = path.replace(`/${prefix}`, "");
        // 由于主应用中使用了v-show来显示/隐藏子应用，所以子应用切换路由时，需要先显示，再切换路由
        // 用于解决页面中有echarts相关图表或者一些需要在activated生命周期重新计算宽高的组件的宽度高度问题，
        setTimeout(() => {
          router.replace({ path }).catch(() => {});
        }, 400);
      } else {
        router.replace({ path: "/empty" }).catch(() => {});
      }
    }
  };
  window.__WUJIE_MOUNT = () => {
    instance = setup();
    window.$wujie?.bus.$on("change-child-route", changeRoute);
  };
  window.__WUJIE_UNMOUNT = () => {
    instance?.$destroy();
    window.$wujie?.bus.$off("change-child-route", changeRoute);
  };
} else {
  setup();
}
