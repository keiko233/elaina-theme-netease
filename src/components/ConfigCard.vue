<template>
  <div class="config-card">
    <div>
      <h3 v-text="props.title" />
      <p v-text="props.illustrate" />
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
  border: solid 1px #ffdee7d6;
  background-color: #ffeef49c;
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