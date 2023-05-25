<template>
  <n-spin :show="loading">
    <ConfigCard title="公告" v-if="context">
      <Chip :title="context.title">
        {{ context.date }}
      </Chip>
      <div class="content" v-html="context.content" />
    </ConfigCard>
  </n-spin>
</template>

<script setup lang="ts">
const loading = ref(false)

const context = ref();

const getNotice = () => {
  loading.value = true;
  fetch('https://gist.githubusercontent.com/keiko233/e739b16787a4656b21aab629d7fdde9b/raw')
    .then((response) => response.json())
    .then((json) => {
      loading.value = false;
      context.value = json.response[0];
    });
};

onMounted(() => {
  getNotice();
});
</script>

<style scoped lang="less">
.content {
  padding: calc(var(--border-radius) / 2);
}
</style>