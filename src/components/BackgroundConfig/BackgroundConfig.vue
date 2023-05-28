<template>
  <ConfigCard title="自定义背景"
    illustrate="本功能和BGEnhanced实现方式有所出，建议只用一个，否则出锅我不背。默认使用 https://pic.majokeiko.com/help.html API。如果你要自定义背景，建议大小不要太大。">
    <n-spin :show="loading">

      <n-switch v-model:value="backgroundStatus" @update:value="backgroundSwitch" size="large">
        <template #checked>
          启用主题背景
        </template>
        <template #unchecked>
          不要主题背景
        </template>
      </n-switch>

      <div class="preview" v-if="backgroundStatus">
        <div class="left">
          <p>原始图片</p>
        </div>
        <div class="right">
          <p>缩放后</p>
        </div>
      </div>

      <ImageInput v-if="backgroundStatus" :id="'bg-imagefile'" :useFunc="() => updateCustomBackgronud('bg-imagefile')"
        :resetFunc="resetBackgronud" />

      <template #description>
        少女祈祷中...
      </template>
    </n-spin>
  </ConfigCard>
</template>

<script setup lang="ts">
import {
  customBackgroundImageData,
  backgroundStatus,
  insertBackground,
  removeBackground,
  updateCustomBackgronud
} from '.';
import { putLS } from '../../utils/localStorage';

const loading = ref(false);

const backgroundSwitch = (value: boolean) => {
  putLS('elaina-backgroundStatus', value);
  if (value) {
    if (customBackgroundImageData.value === null) {
      loading.value = true;
      fetch('https://pic.majokeiko.com/?m=json')
        .then((response) => response.json())
        .then((json) => {
          insertBackground(json.response[0].url);
          loading.value = false;
        });
    }
    else insertBackground(customBackgroundImageData.value);
  }
  else removeBackground();
};

const resetBackgronud = () => {
  putLS('elaina-customBackgroundImageData', null);
  customBackgroundImageData.value = null;
  backgroundSwitch(true);
};

onMounted(() => {
  if (backgroundStatus.value) backgroundSwitch(true);
});
</script>

<style scoped lang="less">
.preview {
  height: 160px;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;

  .left {
    height: 100%;
    width: 160px;
    background-image: var(--background-image);
    background-size: contain;
    background-repeat: no-repeat;
    border: solid 1px #ffffff;
    margin-right: 10px;
  }

  .right {
    height: 100%;
    width: 290px;
    background-image: var(--background-image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: solid 1px #ffffff;
  }

  p {
    padding: 10px;
  }
}
</style>