import { createApp, h } from 'vue'
import ThemeConfig from '../components/vue/ThemeConfig.vue'
import isNCMClient from "../components/js/ClientCheck.js"

if (isNCMClient()) {
  plugin.onConfig(() => {
    const createContainer = document.createElement('div');
    const createElement = createContainer.appendChild(document.createElement('div'));
    createElement.className = 'elaina-container-row';

    const vueLoader = createElement.appendChild(document.createElement('div'));
    createApp(h(ThemeConfig)).mount(vueLoader);

    return createContainer;
  });

};