<template>
  <div class="config-card">
    <h3>背景叠加层</h3>
    <p>就是你看着发蓝发红的那一层，可选开关，不能自定义。</p>

    <n-switch v-model:value="backgroundOverlayStatus" @update:value="backgroundOverlaySwitch" size="large">
      <template #checked>
        启用叠加层
      </template>
      <template #unchecked>
        关闭叠加层
      </template>
    </n-switch>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { NSwitch } from 'naive-ui'
import { initLS, updateLS } from "../../js/LocalStorage"
import isNCMClient from "../../js/ClientCheck.js"
import { insertStyle, removeStyle } from "../../js/StyleInsert"

const backgroundOverlayStatus = ref(initLS('enableBackgroundOverlay', true))

const setBackgrounndOverlay = (value) => {
  const header = document.getElementById('music-163-com');

  if (value) {
    if (isNCMClient()) header.classList.add('background-overlay');
    const style = `body#music-163-com.background-overlay::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background: var(--gradient-bg);
    }`;
    insertStyle('background-overlay', style);
  } else {
    removeStyle('background-overlay');
    if (isNCMClient()) header.classList.remove('background-overlay');
  }
}

const backgroundOverlaySwitch = (value) => {
  updateLS('enableBackgroundOverlay', value);
  setBackgrounndOverlay(value);
}

onMounted(() => {
  if (isNCMClient() && backgroundOverlayStatus.value == true) {
    setBackgrounndOverlay(true);
  }
})

</script>

<style lang="less" scoped>
@import "../../../assets/style/custom/configCommon.less";
</style>