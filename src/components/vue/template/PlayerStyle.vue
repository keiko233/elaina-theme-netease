<template>
  <div class="config-card">
    <h3>使用主题内置的播放界面</h3>
    <p>默认开启，本功能修改了部分CSS具有入侵性，可能会导致和而其他插件不兼容导致布局出错。如果遇到问题可以尝试关闭，关闭后将使用原本的播放界面</p>
    <n-switch v-model:value="playerStyleStatus" @update:value="playerStyleSwitch" size="large">
      <template #checked>
        启用主题播放界面
      </template>
      <template #unchecked>
        关闭主题播放界面
      </template>
    </n-switch>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NSwitch } from 'naive-ui'
import isNCMClient from "../../js/ClientCheck.js"

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

const playerStyleStatus = ref(JSON.parse(localStorage.getItem('enableThemePlayStyle')));

const playerStyleSwitch = (value) => {
  localStorage.setItem('enableThemePlayStyle', value);
  setThemePlayStyle(value);
}

onMounted(() => {
  console.log("onMounted");
  if (playerStyleStatus.value == true && isNCMClient()) {
    setThemePlayStyle(true);
  }
})

</script>

<style lang="less" scoped>
@import "../../../assets/style/custom/configCommon.less";
</style>