<template>
  <div class="chip">
    <span v-text="props.title" />
    <slot />
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
  background-color: #ffd3d3a7;
  width: fit-content;
  padding: 8px 10px;
  border-radius: 36px;

  span {
    margin-right: 8px;
  }
}
</style>