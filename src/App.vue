<template>
  <div class="container">
    <div class="loadcard">
      <h1>仅供预览，只有在NCM客户端才能生效</h1>
    </div>
    <div class="loadcard">
      <ThemeConfig />
    </div>
  </div>
</template>

<script setup>
import ThemeConfig from './components/vue/ThemeConfig.vue'

</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
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

  .loadcard {
    backdrop-filter: var(--theme-blur-home);
    max-width: 600px;
    padding: 24px 36px;
    margin: 10px 0;
    background-color: var(--background-overlay);
    border-radius: var(--border-radius);
  }
}
</style>
