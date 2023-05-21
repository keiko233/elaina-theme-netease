<template>
  <ConfigCard title="获取 Actions 测试版" illustrate="下载测试版构建的插件，提前体验新功能。但是你需要承担测试构建带来的未知问题。">
    <div class="elaina-btn-group">
      <div class="elaina-btn" @click="showArtifacet = true" v-if="!showArtifacet">
        <a>确认开启此功能</a>
      </div>
      <div class="elaina-btn" @click="getLatestArtifact" v-if="showArtifacet">
        <a>获取测试版构建</a>
      </div>
    </div>

    <div v-if="latestWorkflow">
      <p>Artifact ID: {{ latestArtifact.id }}</p>
      <p>Workflow ID: {{ latestWorkflow.id }}</p>
      <p>构建分支: {{ latestWorkflow.head_branch }}</p>
      <p>构建标题: {{ latestWorkflow.display_title }}</p>
      <p>构建状态: {{ latestWorkflow.status }}</p>
      <p>构建结果: {{ latestWorkflow.conclusion }}</p>
      <p>链接: {{ latestWorkflow.html_url }}</p>
      <p>创建时间: {{ latestWorkflow.created_at }}</p>
      <p>更新时间: {{ latestWorkflow.updated_at }}</p>
      <p>构建者: {{ latestWorkflow.triggering_actor.login }}</p>
      <div>commit 信息: {{ latestWorkflow.head_commit.message }}</div>

      <p>安装测试构建需要 GitHub 用户 Token，请务必填写。创建 GitHub Token 对于新手来说不是一件简单的事情，请谨慎操作。</p>

      <input v-model="token" placeholder="GitHub Token" />

      <div class="elaina-btn-group">
        <div class="elaina-btn" @click="install(latestArtifact.archive_download_url)">
          <a>安装测试构建</a>
        </div>
      </div>
    </div>

    <div class="log" v-if="logs[0]">
      <h3>日志输出</h3>
      <p v-for="log in logs">
        <code>{{ log }}</code>
      </p>
    </div>
  </ConfigCard>
</template>

<script setup lang="ts">
const showArtifacet = ref(false);

const latestArtifact = ref();

const latestWorkflow = ref();

const getLatestArtifact = () => {
  pushLog('获取 actions 最新的 artifacts 信息');
  fetch('https://api.github.com/repos/keiko233/elaina-theme-netease/actions/artifacts?per_page=1')
    .then((response) => response.json())
    .then((json) => {
      latestArtifact.value = json.artifacts[0];
      pushLog('获取成功，id: ' + json.artifacts[0].id);
      getLatestWorkflow(json.artifacts[0].workflow_run.id)
    });
};

const getLatestWorkflow = (id: number) => {
  pushLog('获取 id 为 ' + id + ' 的 Workflow 信息');
  fetch('https://api.github.com/repos/keiko233/elaina-theme-netease/actions/runs/' + id)
    .then((response) => response.json())
    .then((json) => {
      latestWorkflow.value = json;
      pushLog('获取成功，id: ' + json.id);
    });
};

const logs = ref([]);

const pushLog = (content: string) => {
  // @ts-ignore
  logs.value.push(content);
};

const token = ref();

const install = (url: string) => {
  pushLog('准备安装 ' + url);
  pushLog('用户 token: ' + token.value);
  if (token.value == null) {
    pushLog('用户 token 未填写，无法请求');
  }
};

</script>

<style scoped lang="less">
.log {
  border: 1px solid #444444;
  padding: 8px;
}
</style>