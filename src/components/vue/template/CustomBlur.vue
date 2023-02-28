<template>
  <div class="config-card">
    <h3>毛玻璃效果调整</h3>
    <p>如题，开启后对GPU性能会有一定开销，设定为0可以禁用。</p>

    <div class="config-list-card">
      <div class="config-list-preview">
        <div class="input-box">
          <p>主页</p>
          <div class="input-content">
            <n-input-number v-model:value="blurHome" :min="0"
              @update:value="updateBlurValue(blurHome, 'customBlurHomeValue')" />
          </div>
        </div>
      </div>

      <div class="config-list-preview">
        <div class="input-box">
          <p>播放页</p>
          <div class="input-content">
            <n-input-number v-model:value="blurPlay" :min="0"
              @update:value="updateBlurValue(blurPlay, 'customBlurPlayValue')" />
          </div>
        </div>
      </div>

      <div class="config-list-preview">
        <div class="input-box">
          <p>播放页底栏</p>
          <div class="input-content">
            <n-input-number v-model:value="blurDock" :min="0"
              @update:value="updateBlurValue(blurDock, 'customBlurDockValue')" />
          </div>
        </div>
      </div>

      <div class="config-list-preview">
        <div class="input-box">
          <p>评论区卡片</p>
          <div class="input-content">
            <n-input-number v-model:value="blurComment" :min="0"
              @update:value="updateBlurValue(blurComment, 'customBlurCommentValue')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NInputNumber, NSpace } from 'naive-ui'
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
@import "../../../assets/style/custom/configCommon.less";
</style>