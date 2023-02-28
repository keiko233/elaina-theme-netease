<template>
  <div class="config-card">
    <h3>播放界面歌曲名显示</h3>
    <p>启用需要使用内置的播放界面，用其他的插件可能会出现不兼容问题，所以默认不开启。</p>
    <n-switch v-model:value="songNameOnTopStatus" @update:value="songNameOnTopSwitch" size="large">
      <template #checked>
        歌名显示在顶部栏
      </template>
      <template #unchecked>
        歌名显示在封面下
      </template>
    </n-switch>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NSwitch } from 'naive-ui'
import isNCMClient from "../../js/ClientCheck.js"

const insertSongInfo = () => {
  const createSongInfo = document.querySelector('.cd.j-flag').appendChild(document.createElement('div'));
  createSongInfo.className = 'elaina-song-info';
  createSongInfo.appendChild(document.querySelector('.head.j-fflag'))
}

const songNameOnTopStatus = ref(JSON.parse(localStorage.getItem('enableSongNameOnTop')))

const songNameOnTop = (value) => {
  const header = document.getElementById('music-163-com');

  if (value) {
    header.classList.add('song-name-on-top');
  } else {
    header.classList.remove('song-name-on-top');
  }
}

const songNameOnTopSwitch = (value) => {
  localStorage.setItem('enableSongNameOnTop', value);
  songNameOnTop(value);
}

onMounted(() => {
  if (songNameOnTopStatus.value == true && isNCMClient()) {
    songNameOnTop(true);
  }
  if (isNCMClient()) {
    document.querySelector('.info.j-flag.info-new').onclick = function () {
      if (!document.querySelector('.elaina-song-info')) {
        insertSongInfo();
      }
    }
  }
})
</script>

<style lang="less" scoped>
@import "../../../assets/style/custom/configCommon.less";
</style>