<template>
  <div class="elaina-btn-group">
    <div class="elaina-input">
      <input type="file" :id="props.id" />
      <a>选择图片</a>
    </div>
    <div class="elaina-btn" @click="useFunc">
      <a>应用</a>
    </div>
    <div class="elaina-btn" v-if="resetFunc" @click="resetFunc">
      <a>恢复默认</a>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface ComponentProps {
  id: string;
  useFunc: () => void;
  resetFunc: () => void;
}

const props = defineProps<ComponentProps>();
</script>

<style scoped lang="less">
.elaina-input {
  padding-right: 8px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  a {
    color: #ffffff;
    font-size: 16px;
    padding: 6px 16px;
    border-radius: var(--border-radius);
    background: #1d1d1d70;
  }

  input {
    opacity: 0;
    position: absolute;
    padding: 6px 0;
    width: 96px;
  }
}
</style>