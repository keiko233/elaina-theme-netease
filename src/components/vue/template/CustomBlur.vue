<template>
  <div class="config-card">
    <h3>毛玻璃效果调整</h3>
    <p>如题，开启后对GPU性能会有一定开销，设定为0可以禁用。</p>
    <div class="config-blur-card">
      <div class="config-blur-perview">
        <p>主页</p>
        <n-input-number v-model:value="blurHome" @update:value="updateBlurValue(blurHome, 'customBlurHomeValue')" :min="0" />
      </div>
      <div class="config-blur-perview">
        <p>播放页</p>
        <n-input-number v-model:value="blurPlay" @update:value="updateBlurValue(blurPlay, 'customBlurPlayValue')" :min="0" />
      </div>
      <div class="config-blur-perview">
        <p>播放页Dock栏</p>
        <n-input-number v-model:value="blurDock" @update:value="updateBlurValue(blurDock, 'customBlurDockValue')" :min="0" />
      </div>
      <div class="config-blur-perview">
        <p>播放页评论区卡片</p>
        <n-input-number v-model:value="blurComment" @update:value="updateBlurValue(blurComment, 'customBlurCommentValue')" :min="0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NInputNumber } from 'naive-ui'
import { initLS } from "../../js/LocalStorage"
import { insertStyle } from "../../js/StyleInsert"

const blurHome = ref(initLS('customBlurHomeValue', 5));
const blurPlay = ref(initLS('customBlurPlayValue', 5));
const blurDock = ref(initLS('customBlurDockValue', 32));
const blurComment = ref(initLS('customBlurCommentValue', 32));

const customBlurStyle = (home, play, dock, comment) => {
  const style = `:root {
    --theme-blur-home: blur(${home}px);
    --theme-blur-play: blur(${play}px);
    --theme-blur-dock: blur(${dock}px);
    --theme-blur-comment: blur(${comment}px);
  }`;
  insertStyle('custom-blur', style);
}

const updateBlurValue = (value, model) => {
  localStorage.setItem(model, value);
  customBlurStyle(blurHome.value, blurPlay.value, blurDock.value, blurComment.value);
}

onMounted(() => {
  customBlurStyle(blurHome.value, blurPlay.value, blurDock.value, blurComment.value);
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