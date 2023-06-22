<template>
  <ConfigCard title="插件信息">
    <p>版本: <span>{{ packageJson.version }}</span></p>
    <p>作者: <span>{{ packageJson.author }}</span></p>
    <div class="elaina-btn-group">
      <div class="elaina-btn" @click="openUrl('https://github.com/keiko233/elaina-theme-netease')">
        <a>GitHub</a>
      </div>
      <div class="elaina-btn" @click="openUrl('https://github.com/keiko233/elaina-theme-netease/actions')">
        <a>Actions</a>
      </div>
    </div>
  </ConfigCard>
</template>

<script setup lang="ts">
import packageJson from "../../package.json";
import { isNCMClient } from "../utils/clientCheck";

const openUrl = (url: string) => {
  // @ts-ignore
  if (isNCMClient()) betterncm.ncm.openUrl(url);
  else window.open(url, '_blank');
}
</script>

<style scoped lang="less">

</style>