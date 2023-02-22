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

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .loadcard {
    width: 600px;
    padding: 24px 36px;
    margin: 10px 0;
    background-color: var(--background-overlay);
    border-radius: var(--border-raduis);
  }
}
</style>
