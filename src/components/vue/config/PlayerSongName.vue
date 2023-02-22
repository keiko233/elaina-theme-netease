<template>
  <div class="config-card">
    <h3>播放界面歌曲名显示</h3>
    <p>启用需要使用内置的播放界面，用其他的插件可能会出现不兼容问题，所以默认不开启。</p>
    <n-switch v-model:value="songNameStatus" @update:value="songNameSwitch" size="large">
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

const songNameStatus = ref(JSON.parse(localStorage.getItem('enableSongNameOnTop')))

const songNameOnTop = (value) => {
  const header = document.getElementById('music-163-com');

  if (value) {
    header.classList.add('song-name-on-top');
  } else {
    header.classList.remove('song-name-on-top');
  }
}

const songNameSwitch = (value) => {
  localStorage.setItem('enableSongNameOnTop', value);
  songNameOnTop(value);
}

onMounted(() => {
  if (songNameStatus.value == true) {
    songNameOnTop(true);
  }
})
</script>