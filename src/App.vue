<template>
  <div class="container">
    <div class="preview-card">
      <h1>仅供开发预览，只有在NCM客户端才能生效</h1>
    </div>
    <div class="preview-card">
      <PluginView />
    </div>
  </div>
</template>

<script setup lang="ts">
import PluginView from './views/PluginView.vue';
</script>

<style scoped lang="less">
h1 {
  margin: 0;
  font-size: 26px;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: var(--background-image);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .preview-card {
    width: 600px;
    padding: 24px 36px;
    margin: 10px 0;
    background-color: var(--background-overlay);
    border-radius: var(--border-radius);
  }
}
</style>