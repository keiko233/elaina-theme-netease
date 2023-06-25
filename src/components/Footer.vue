<template>
  <ConfigCard title="插件信息">
    <p>版本: <span>{{ packageJson.version }}</span></p>
    <p>作者: <span>{{ packageJson.author }}</span></p>
    <div class="elaina-btn-group">
      <n-tooltip v-for="btn in btns" trigger="hover" :disabled="!btn.tip">
        <template #trigger>
          <div class="elaina-btn" @click="openUrl(btn.url)">
            <a v-text="btn.name" />
          </div>
        </template>
        {{ btn.tip }}
      </n-tooltip>
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

const btns = ref([
  { name: 'GitHub', tip: '查看 Repo', url: 'https://github.com/keiko233/elaina-theme-netease' },
  { name: 'Actions', tip: '开发版下载', url: 'https://github.com/keiko233/elaina-theme-netease/actions' },
  { name: '打赏(爱发电)', tip: '真的吗！感谢支持！', url: 'https://afdian.net/a/keiko233' }
]);
</script>

<style scoped lang="less"></style>