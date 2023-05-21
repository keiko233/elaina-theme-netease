<template>
  <div class="render-container">
    <n-gradient-text :size="36" type="info" v-if="props.title" v-html="props.title" class="gradient-text-rewirte" />
    <div class="component-container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: null
  }
});
</script>

<style scoped lang="less">
.render-container {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .component-container {
    width: 600px;
  }
}

.gradient-text-rewirte {
  text-align: right;
  margin-right: 48px;
}
</style>