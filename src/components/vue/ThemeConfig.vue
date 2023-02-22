<template>
  <n-config-provider :theme="darkTheme">
    <div class="title">Elaina Theme Config</div>

    <div class="config-card">
      <h3>使用主题内置的播放界面</h3>
      <p>默认开启。如果遇到问题可以尝试关闭，主题修改了部分CSS具有入侵性，可能会导致和而其他插件不兼容导致布局出错。</p>
      <n-switch v-model:value="playerStyle" @update:value="playerStyleSwitch" size="large">
        <template #checked>
          启用主题播放界面
        </template>
        <template #unchecked>
          关闭主题播放界面
        </template>
      </n-switch>
    </div>

    <div class="config-card">
      <h3>播放界面歌曲名显示</h3>
      <p>启用需要使用内置的播放界面，用其他的插件可能会出现不兼容问题，所以默认不开启。</p>
      <n-switch v-model:value="songNameStatus" @update:value="songNameSwitch" size="large">
        <template #checked>
          歌名显示在顶部栏
        </template>
        <template #unchecked>
          歌名显示在封面下
        </template>
      </n-switch>
    </div>

    <div class="info">
      <h3>插件信息</h3>
      <p>版本: <span>{{ packageJson.version }}</span></p>
      <div class="elaina-btn-group">
        <div class="elaina-btn" @click="toGitHub">
          <a>前往 GitHub</a>
        </div>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { ref, onMounted } from "vue"
import isNCMClient from "../js/ClientCheck.js"
import packageJson from "../../../package.json"
import { NConfigProvider, darkTheme, NSwitch } from 'naive-ui'

const toGitHub = () => {
  const url = 'https://github.com/keiko233/elaina-theme-netease';
  if (isNCMClient()) {
    betterncm.ncm.openUrl(url);
  } else {
    window.open(url, '_blank');
  }
}

const songNameStatus = ref(JSON.parse(localStorage.getItem('enableSongNameOnTop')))

const songNameOnTop = (value) => {
  const header = document.getElementById('music-163-com');

  if (value) {
    header.classList.add('song-name-on-top');
  } else {
    header.classList.remove('song-name-on-top');
  }
}

const songNameSwitch = (value) => {
  localStorage.setItem('enableSongNameOnTop', value);
  songNameOnTop(value);
}

const setThemePlayStyle = (value) => {
  const header = document.getElementById('music-163-com');

  if (value) {
    header.classList.add('theme-player');
  } else {
    header.classList.remove('theme-player');
  }
}

if (!localStorage.getItem('enableThemePlayStyle')) {
  localStorage.setItem('enableThemePlayStyle', 'true')
  setThemePlayStyle(true);
}

const playerStyle = ref(JSON.parse(localStorage.getItem('enableThemePlayStyle')));

const playerStyleSwitch = (value) => {
  localStorage.setItem('enableThemePlayStyle', value);
  setThemePlayStyle(value);
}

onMounted(() => {
  console.log("onMounted");
  if (songNameStatus.value == true) {
    songNameOnTop(true);
  }
  if (playerStyle.value == true) {
    setThemePlayStyle(true);
  }
})
</script>

<style lang="less" scoped>
* {
  font-family: "Microsoft Yahei", arial, helvetica, sans-serif, simsun;
}

.title {
  font-size: 36px;
  padding-bottom: 12px;
}

.menu-title {
  font-size: 24px;
  padding: 12px 0;
}

.config-card {
  padding: 12px 0;

  h3 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 12px;
    margin: 0;
  }

  p {
    padding-bottom: 6px;
  }
}

.info {
  padding-top: 12px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 12px;
    margin: 0;
  }

  p {
    margin: 0;
    padding-bottom: 6px;

    span {
      font-weight: 500;
    }
  }
}
</style>
