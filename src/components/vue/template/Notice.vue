<!--
 * @Author: keiko233
 * @Date: 2023-04-27 05:32:30
 * @LastEditors: keiko233
 * @LastEditTime: 2023-04-27 05:46:42
 * @FilePath: \elaina-theme-netease\src\components\vue\template\Notice.vue
 * @Description: Connect me: i@elaina.moe
 * 
 * Copyright (c) 2023 by keiko233, All Rights Reserved. 
-->
<template>
  <div class="config-card">
    <n-spin :show="loadingStatus">
      <h3>公告: {{ noticeResponse.title }} <span v-if="noticeResponse.date">| {{ noticeResponse.date }}</span></h3>
      <p v-html="noticeResponse.content" />
      <template #description>
        请求Gist中
      </template>
    </n-spin>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NSpin } from 'naive-ui'

const noticeResponse = ref({
  "id": null,
  "title": "",
  "date": "",
  "content": "好像还在加载ing..."
});

const loadingStatus = ref(true);

const getNotice = () => {
  loadingStatus.value = true;
  fetch('https://gist.githubusercontent.com/keiko233/e739b16787a4656b21aab629d7fdde9b/raw')
    .then((response) => response.json())
    .then((json) => {
      loadingStatus.value = false;
      noticeResponse.value = json.response[0];
    });
}

onMounted(() => {
  getNotice();
})
</script>

<style lang="less" scoped>
@import "../../../assets/style/custom/configCommon.less";
</style>