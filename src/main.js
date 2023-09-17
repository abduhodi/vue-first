import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import IconAsset from "@/assets/Icons/IconAsset";
/* add icons to the library */

createApp(App).component("icon", IconAsset).use(store).mount("#app");
