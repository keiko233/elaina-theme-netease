import { createApp, h } from 'vue'
import ThemeConfig from '../components/vue/ThemeConfig.vue'
import isNCMClient from "../components/js/ClientCheck.js"

if (isNCMClient()) {
  plugin.onLoad(async () => {
    window.onload = async function () {
      function createSongInfo() {
        const createSongInfo = document.querySelector('.cd.j-flag').appendChild(document.createElement('div'));
        createSongInfo.className = 'elaina-song-info';
        createSongInfo.appendChild(document.querySelector('.head.j-fflag'));
      }

      document.querySelector('.info.j-flag.info-new').onclick = function () {
        if (!document.querySelector('.elaina-song-info')) {
          createSongInfo();
        }
      }
    };
  });

  plugin.onConfig(() => {
    const createContainer = document.createElement('div');
    const createElement = createContainer.appendChild(document.createElement('div'));
    createElement.className = 'elaina-container-row';

    const vueLoader = createElement.appendChild(document.createElement('div'));
    createApp(h(ThemeConfig)).mount(vueLoader);

    return createContainer;
  });

};