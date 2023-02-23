<template>
  <div class="config-card">
    <h3>毛玻璃效果调整</h3>
    <p>如题，开启后对GPU性能会有一定开销，设定为0可以禁用。</p>
    <div class="config-blur-card">
      <div class="config-blur-perview">
        <p>主页</p>
        <n-input-number v-model:value="bulrHome" @update:value="updateBlurValue(bulrHome, 'customBulrHomeValue')" :min="0" />
      </div>
      <div class="config-blur-perview">
        <p>播放页</p>
        <n-input-number v-model:value="bulrPlay" @update:value="updateBlurValue(bulrPlay, 'customBulrPlayValue')" :min="0" />
      </div>
      <div class="config-blur-perview">
        <p>播放页Dock栏</p>
        <n-input-number v-model:value="bulrDock" @update:value="updateBlurValue(bulrDock, 'customBulrDockValue')" :min="0" />
      </div>
      <div class="config-blur-perview">
        <p>播放页评论区卡片</p>
        <n-input-number v-model:value="bulrComment" @update:value="updateBlurValue(bulrComment, 'customBulrCommentValue')" :min="0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NInputNumber } from 'naive-ui'

if (!localStorage.getItem('customBulrHomeValue')) {
  localStorage.setItem('customBulrHomeValue', 5);
}

if (!localStorage.getItem('customBulrPlayValue')) {
  localStorage.setItem('customBulrPlayValue', 5);
}

if (!localStorage.getItem('customBulrDockValue')) {
  localStorage.setItem('customBulrDockValue', 32);
}

if (!localStorage.getItem('customBulrCommentValue')) {
  localStorage.setItem('customBulrCommentValue', 32);
}

const bulrHome = ref(localStorage.getItem('customBulrHomeValue'));
const bulrPlay = ref(localStorage.getItem('customBulrPlayValue'));
const bulrDock = ref(localStorage.getItem('customBulrDockValue'));
const bulrComment = ref(localStorage.getItem('customBulrCommentValue'));

const customBlurStyle = (home, play, dock, comment) => {
  const style = document.createElement("style");
  style.id = 'custom-blur'
  style.innerHTML = `
  :root {
    --theme-blur-home: blur(${home}px);
    --theme-blur-play: blur(${play}px);
    --theme-blur-dock: blur(${dock}px);
    --theme-blur-comment: blur(${comment}px);
  }`;
  document.head.appendChild(style);
}

const updateBlurValue = (value, model) => {
  localStorage.setItem(model, value);
  document.head.removeChild(document.getElementById('custom-blur'));
  customBlurStyle(bulrHome.value, bulrPlay.value, bulrDock.value, bulrComment.value);
}

onMounted(() => {
  customBlurStyle(bulrHome.value, bulrPlay.value, bulrDock.value, bulrComment.value);
})
</script>

<style lang="less" scoped>
.config-blur-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  p {
    width: 100%;
  }

  .config-blur-perview {
    width: 260px;
    margin: 0 10px 10px 0;
  }
}
</style>