<template>
  <a-space>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
  </a-space>

  <a-card title="Default size card" style="width: 300px">
    <template #extra><a href="#">more</a></template>
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </a-card>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
</style>