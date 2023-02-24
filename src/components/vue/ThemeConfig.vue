<template>
  <n-config-provider :locale="zhCN" :theme="darkTheme">
    <div class="config-title">Elaina Theme Config</div>
    <p>注意：建议不要用其他的主题插件，本主题不会修复与其他主题冲突的问题。</p>

    <PlayerStyle />
    <PlayerSongName />
    <CustomColor />
    <CustomBlur />
    <BocchiOverlay />

    <div class="config-info">
      <h3>插件信息</h3>
      <p>版本: <span>{{ packageJson.version }}</span></p>
      <p>作者: <span>{{ packageJson.ncm.author }}</span></p>
      <div class="elaina-btn-group">
        <div class="elaina-btn" @click="openUrl('https://github.com/keiko233/elaina-theme-netease')">
          <a>GitHub Repo</a>
        </div>
        <div class="elaina-btn" @click="openUrl('https://github.com/keiko233/elaina-theme-netease/actions')">
          <a>Actions 编译版本</a>
        </div>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import isNCMClient from "../js/ClientCheck.js"
import packageJson from "../../../package.json"
import { zhCN, darkTheme, NConfigProvider } from 'naive-ui'
import PlayerStyle from "./template/PlayerStyle.vue"
import PlayerSongName from "./template/PlayerSongName.vue"
import CustomColor from "./template/CustomColor.vue"
import CustomBlur from "./template/CustomBlur.vue"
import BocchiOverlay from "./template/BocchiOverlay.vue"

const openUrl = (url) => {
  if (isNCMClient()) {
    betterncm.ncm.openUrl(url);
  } else {
    window.open(url, '_blank');
  }
}

</script>

<style lang="less">
.config-title {
  font-size: 36px;
  padding-bottom: 12px;
}

.config-menu-title {
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

.config-info {
  padding-top: 12px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 12px;
    margin: 0;
  }

  p {
    margin: 0;

    span {
      font-weight: 500;
    }
  }

  .elaina-btn-group {
    padding-top: 12px;
  }
}
</style>
