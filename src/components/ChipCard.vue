<template>
  <div class="chip-card">
    <div class="title" v-if="props.title" v-text="props.title" />
    <div class="slot">
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
.chip-card {
  border-radius: var(--border-radius);
  background-color: #ffd3d3a7;
  width: fit-content;
  min-width: 128px;
  min-height: 128px;

  .title {
    padding: calc(var(--border-radius) / 2);
    font-weight: 700;
    font-size: 16px;
    color: #b00000;
    text-shadow: #ffd3d3 1px 1px 0;
    border-bottom: #ffa3a382 2px solid;
  }

  .slot {
    padding: calc(var(--border-radius) / 2);
  }
}
</style>