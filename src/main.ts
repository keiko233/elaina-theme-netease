import { createApp, h } from 'vue'
import './assets/index.less'
import App from './App.vue'
import PluginViewVue from './views/PluginView.vue'
import { isNCMClient } from './utils/clientCheck'
import { mountSetupWizardView, version } from './components/SetupWizard'
import packageJson from '../package.json'

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

if (version.value != packageJson.version) mountSetupWizardView();
