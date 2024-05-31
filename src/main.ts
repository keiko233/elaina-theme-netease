import { createApp } from "vue";
import "./assets/index.less";
import App from "./App.vue";
import AppPlugin from "./AppPlugin.vue";
import { createPinia } from "pinia";
import "./utils/inject";

const useList = [createPinia()];

try {
  plugin.onConfig(() => {
    const container = document.createElement("div");

    const app = createApp(h(AppPlugin));

    useList.forEach((item) => {
      app.use(item);
    });

    app.mount(container);

    return container;
  });
} catch {
  const app = createApp(App);

  useList.forEach((item) => {
    app.use(item);
  });

  app.mount("#app");
}
