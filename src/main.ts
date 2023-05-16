import { createApp, h } from 'vue'
import './assets/index.less'
import App from './App.vue'
import PluginViewVue from './views/PluginView.vue'
import { isNCMClient } from './utils/clientCheck'

if (isNCMClient()) {
  // @ts-ignore
  plugin.onConfig(() => {
    const container = document.createElement('div');
    createApp(h(PluginViewVue)).mount(container);
    return container;
  });
}
else {
  createApp(App).mount('#app')
}