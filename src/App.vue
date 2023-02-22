<template>
  <div class="title">Elaina Theme</div>
  <div class="elaina-btn-group">
    <div class="elaina-btn" @click="toGitHub">
      <a>前往 GitHub</a>
    </div>
  </div>

  <div class="info">
    <h3>插件信息</h3>
    <p>版本: <span>{{ packageJson.version }}</span></p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import isNCMClient from "./components/js/ClientCheck.js"
import packageJson from "../package.json"

const toGitHub = () => {
  const url = 'https://github.com/keiko233/elaina-theme-netease';
  if (isNCMClient()) {
    betterncm.ncm.openUrl(url);
  } else {
    window.open(url, '_blank');
  }
}

</script>

<style lang="less" scoped>
* {
  font-family: "Microsoft Yahei", arial, helvetica, sans-serif, simsun;
}

.title {
  font-size: 36px;
  padding-bottom: 12px;
}

.info {
  h3 {
    font-size: 24px;
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
}
</style>
