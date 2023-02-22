<template>
  <div class="title">Elaina Theme Config</div>

  <div class="config-card">
    <h3>播放界面歌曲名显示</h3>
    <p>开启效果很不错，默认不开启，防止与其他插件发生不兼容情况。</p>
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
</template>

<script setup>
import { ref, onMounted } from "vue"
import isNCMClient from "../js/ClientCheck.js"
import packageJson from "../../../package.json"
import { NSwitch } from 'naive-ui'

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
  const style = document.createElement("style");
  style.id = 'song-name-on-top';
  style.innerHTML = `
  div#id-single .g-singlec-hd.j-flag .wrap.j-flag{
    opacity: 1;
  }

  div#id-single .g-singlec-ct.j-fflag {
    top: 60px !important;
  }
  
  div#id-single .g-singlec-ct.j-fflag .n-single {
    margin-top: 0 !important;
  }
  
  div#id-single .g-singlec-ct.j-fflag .n-single .wrap .content .sd.j-flag {
    margin: 84px 0 !important;
  }

  div#id-single .g-singlec-ct.j-fflag .n-single .wrap .content .elaina-song-info .head.j-fflag .inf.j-flag .title {
    display: none !important;
  }

  div#id-single .g-singlec-ct.j-fflag .n-single .wrap .content .mn.j-flag {
    height: 490px !important;
  }
  `;

  if (value) {
    document.head.appendChild(style);
  } else {
    document.head.removeChild(document.getElementById('song-name-on-top'));
  }
}

const songNameSwitch = (value) => {
  localStorage.setItem('enableSongNameOnTop', value);
  songNameOnTop(value);
}

onMounted(() => {
  console.log("onMounted");
  if (songNameStatus.value == true) {
    songNameOnTop(true);
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
    font-size: 24px;
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
