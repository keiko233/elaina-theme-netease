import { createApp } from "vue";
import "./assets/index.less";
import App from "./App.vue";
import PluginView from "./views/PluginView.vue";

try {
  plugin.onConfig(() => {
    const container = document.createElement("div");
    createApp(h(PluginView)).mount(container);
    return container;
  });
} catch {
  createApp(App).mount("#app");
}
