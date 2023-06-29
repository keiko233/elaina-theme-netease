<template>
  <ConfigCard title="插件信息">
    <p>版本: <span>{{ packageJson.version }}</span></p>
    <p>作者: <span>{{ packageJson.author }}</span></p>
    <div class="elaina-btn-group">
      <n-popover trigger="hover" v-for="btn in btns">
        <template #trigger>
          <div class="elaina-btn" @click="openUrl(btn.url)">
            <a v-text="btn.name" />
          </div>
        </template>
        <p>{{ btn.tip }}</p>
        <img v-if="btn.images" style="margin-top: 6px;" width="128" src="https://pic.majokeiko.com/saifu.jpg">
      </n-popover>
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
  { name: '打赏(爱发电)', tip: '真的吗！感谢支持！', url: 'https://afdian.net/a/keiko233', images: 'https://pic.majokeiko.com/saifu.jpg' }
]);
</script>

<style scoped lang="less"></style>