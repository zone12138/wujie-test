import { createApp } from "vue";
import App from "./App.vue";

import WujieVue from 'wujie-vue3'

const app = createApp(App)

app.use(WujieVue).mount('#app')