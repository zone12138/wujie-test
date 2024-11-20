import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";

Vue.config.productionTip = false;

Vue.use(ElementUI)
import './style/index.scss'
import 'element-ui/lib/theme-chalk/index.css';

function setup() {
  return new Vue({
    render: (h) => h(App),
  }).$mount('#app')
}

if (window.__POWERED_BY_WUJIE__) {
  let instance
  window.__WUJIE_MOUNT = () => {
    instance = setup()
    window.$wujie.bus.$on('changeUser', (e) => {
      // setUser(e.user)
    })
  }
  window.__WUJIE_UNMOUNT = () => {
    instance?.$destroy()
  }
} else {
  setup()
}
