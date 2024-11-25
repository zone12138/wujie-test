import router from "@/router/index";
/**
 * 子应用路由切换时，需要将路由切换到子应用路由对应的页面
 * @param {string} toPath 要进入的路由
 * @param {string} fromPath 当前导航正要离开的路由
 */
const changeRoute = (toPath = "", fromPath = "") => {
  let prefix = window?.__WUJIE?.id;
  if (typeof prefix === "string") {
    prefix = `/${prefix}/`;
    if (toPath.indexOf(prefix) === 0) {
      const path = toPath.replace(prefix, "/");
      if (typeof fromPath === "string" && fromPath.indexOf(prefix) === 0) {
        // 同个子应用页面间的路由切换不需要延时处理
        router.replace({ path });
      } else {
        // 由于主应用中使用了v-show来显示/隐藏子应用，所以从非该子应用的路由切换到该子应用的路由时，需要先显示，再切换路由
        // 用于解决页面中有echarts相关图表或者一些需要在activated生命周期重新计算宽高的组件的宽度高度问题，
        setTimeout(() => {
          router.replace({ path });
        }, 0);
      }
    } else {
      router.replace({ path: "/empty" });
    }
  }
};

/**
 * 订阅来自主应用的消息
 * 当前拥有的订阅有：1. change-child-route：主应用路由切换时，通知子应用切换路由
 */
const subscribe = () => {
  window.$wujie?.bus.$on("change-child-route", changeRoute);
};

/**
 * 取消订阅
 */
const stopSubscribe = () => {
  window.$wujie?.bus.$off("change-child-route", changeRoute);
};

export { subscribe, stopSubscribe };
