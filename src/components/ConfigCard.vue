<template>
  <div class="config-card">
    <div>
      <h3 v-if="props.title" v-text="props.title" />
      <p v-if="props.illustrate" v-text="props.illustrate" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: null
  },
  illustrate: {
    type: String as PropType<string>,
    default: null
  }
});
</script>

<style scoped lang="less">
.config-card {
  padding: calc(var(--border-radius) /2);
  border: var(--theme-config-card-border);
  background-color: var(--theme-config-card-background);
  border-radius: var(--border-radius);
  backdrop-filter: var(--theme-blur-config-card);
  
  h3 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 12px;
    margin: 0;
  }

  p {
    padding-bottom: 6px;
  }
}
</style>