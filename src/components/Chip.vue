<template>
  <div class="chip">
    <span v-text="props.title" style="margin-left: 6px; margin-right: 8px;" />
    <span style="float: right;">
      <slot />
    </span>
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
.chip {
  background-color: var(--theme-config-card-background);
  padding: 8px 10px;
  border-radius: 36px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>