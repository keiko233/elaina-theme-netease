<template>
  <ConfigCard title="插件信息">
    <p>版本: <span>{{ packageJson.version }}</span></p>
    <p>作者: <span>{{ packageJson.author }}</span></p>
    <div class="elaina-btn-group">

      <div class="elaina-btn" @click="openUrl('https://github.com/keiko233/elaina-theme-netease')">
        <a>GitHub</a>
      </div>

      <n-popover trigger="hover">
        <template #trigger>
          <div class="elaina-btn">
            <a>开发版下载</a>
          </div>
        </template>
        <ActionsCard />
      </n-popover>

      <n-popover trigger="hover">
        <template #trigger>
          <div class="elaina-btn" @click="openUrl('https://afdian.net/a/keiko233')">
            <a>打赏(爱发电)</a>
          </div>
        </template>
        <p>真的吗！感谢支持！</p>
        <img style="margin-top: 6px;" width="128" :src="saifuImage">
      </n-popover>
    </div>
  </ConfigCard>
</template>

<script setup lang="ts">
import packageJson from "../../package.json";
import saifuImage from "../assets/images/saifu.jpg";
import ActionsCard from './ActionsCard.vue';
import { openUrl } from '../utils/openUrl';

</script>

<style scoped lang="less"></style>