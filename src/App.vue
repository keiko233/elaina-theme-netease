<template>
  <div class="container">
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

  .loadcard {
    background-color: var(--background-overlay);
    padding: 24px 36px;
    border-radius: var(--border-raduis);
  }
}
</style>
