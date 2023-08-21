<template>
  <div v-if="!workflows">
    正在获取信息
  </div>

  <div v-else>
    <b>最新的 Actions 信息</b>
    <p><b>构建类型: </b>{{ workflows.name }}</p>
    <p><b>构建标题: </b>{{ workflows.display_title }}</p>
    <p><b>触发时间: </b>{{ workflows.run_started_at }}</p>
    <p><b>更新时间: </b>{{ workflows.updated_at }}</p>
    <p><b>构建状态: </b>{{ workflows.status }}</p>
    <p><b>Commit: </b></p>
    <p v-html="workflows.head_commit.message" style="white-space: pre-wrap;" />
    <div class="elaina-btn" @click="openUrl(workflows.html_url)">
      <a>查看链接</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { openUrl } from '../utils/openUrl';

const workflows = ref();

const getActionsRuns = () => {
  fetch('https://api.github.com/repos/keiko233/elaina-theme-netease/actions/runs?per_page=1')
    .then(response => response.json())
    .then(response => workflows.value = response.workflow_runs[0])
    .catch(err => console.error(err));
};

onMounted(() => {
  getActionsRuns();
});
</script>

<style scoped lang="less">
.elaina-btn {
  margin: 12px 0;
}
</style>