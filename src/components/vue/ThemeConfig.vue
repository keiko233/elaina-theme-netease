<template>
  <n-config-provider :theme="darkTheme">
    <div class="title">Elaina Theme Config</div>

    <PlayerStyle />
    <PlayerSongName />

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
import isNCMClient from "../js/ClientCheck.js"
import packageJson from "../../../package.json"
import { NConfigProvider } from 'naive-ui'
import PlayerStyle from "./config/PlayerStyle.vue"
import PlayerSongName from "./config/PlayerSongName.vue"

const toGitHub = () => {
  const url = 'https://github.com/keiko233/elaina-theme-netease';
  if (isNCMClient()) {
    betterncm.ncm.openUrl(url);
  } else {
    window.open(url, '_blank');
  }
}

</script>

<style lang="less" >
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
