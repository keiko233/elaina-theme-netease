import { createApp } from "vue";
import "./assets/index.less";
import App from "./App.vue";
import AppPlugin from "./AppPlugin.vue";

try {
  plugin.onConfig(() => {
    const container = document.createElement("div");

    createApp(h(AppPlugin)).mount(container);

    return container;
  });
} catch {
  createApp(App).mount("#app");
}
