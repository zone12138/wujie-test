import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import pinia from "./store/index";
import ElementPlus from "element-plus";

import 'element-plus/dist/index.css'
import './style/index.scss'

import WujieVue from "wujie-vue3";
import { appInfos } from './wujie/register'

const { preloadApp, setupApp } = WujieVue;


const app = createApp(App);

app.use(router).use(pinia).use(ElementPlus).use(WujieVue).mount("#app");

appInfos.forEach(v => {
  setupApp(v)
})
