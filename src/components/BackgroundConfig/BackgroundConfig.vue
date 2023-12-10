<template>
  <ConfigCard title="自定义背景"
    illustrate="本功能和BGEnhanced实现方式有所出，建议只用一个，否则出锅我不背。默认使用 https://pic.majokeiko.com/help.html API。如果你要自定义背景，建议大小不要太大，因为本功能存储图像的原理是转为base64保存至LocalStorage，而LocalStorage最大只有4M大小，故建议裁剪图片到500KB左右。">
    <n-spin :show="loading">

      <n-switch v-model:value="backgroundStatus" @update:value="backgroundSwitch" size="large">
        <template #checked>
          启用主题背景
        </template>
        <template #unchecked>
          不要主题背景
        </template>
      </n-switch>

      <div v-if="backgroundStatus">
        <div class="preview">
          <div class="left">
            <p>原始图片</p>
          </div>
          <div class="right">
            <p>缩放后</p>
          </div>
        </div>

        <div class="chip-slider">
          <n-tag size="small" round :bordered="false" type="info" class="tag-input-overlay">
            纵向显示位置调整
          </n-tag>
          <n-slider v-model:value="positionY" @update:value="positionOverlay" />
        </div>

        <n-config-provider :theme-overrides="themeOverrides">
          <n-select v-model:value="pathOptionsSelectValue" :options="pathOptions" @update:value="pathOptionsSelect"
            :disabled="!pathOptions[0]" style="padding-bottom: 10px;" />
        </n-config-provider>

        <ImageInput :id="'bg-imagefile'" :useFunc="() => updateCustomBackgronud('bg-imagefile')"
          :resetFunc="resetBackgronud">
          <div class="elaina-btn" @click="toggleStaticBackgroundUrl()">
            <a v-if="!staticBackgroundUrl">固定背景图片</a>
            <a v-else>取消固定</a>
          </div>

          <n-tooltip trigger="hover" style="user-select: text">
            <template #trigger>
              <div class="elaina-btn">
                <a>图片链接</a>
              </div>
            </template>
            {{ getBackgroundUrl() }}
          </n-tooltip>
        </ImageInput>
      </div>

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
  updateCustomBackgronud,
  positionOverlay,
  saveBackgroundUrl,
  getBackgroundUrl,
  staticBackgroundUrl,
  toggleStaticBackgroundUrl,
  pathOptions,
  pathOptionsSelectValue
} from '.';
import { initLS, putLS } from '../../utils/localStorage';

const loading = ref(false);

const positionY = ref(initLS('elaina-backgroundPositionY', 50));

const backgroundSwitch = (value: boolean) => {
  putLS('elaina-backgroundStatus', value);
  if (value) {
    if (staticBackgroundUrl.value) {
      insertBackground(getBackgroundUrl());
    }
    else if (customBackgroundImageData.value === null) {
      loading.value = true;
      fetch('https://pic.majokeiko.com/?m=json&p=' + pathOptionsSelectValue.value)
        .then((response) => response.json())
        .then((json) => {
          insertBackground(json.response[0].url);
          saveBackgroundUrl(json.response[0].url);
          loading.value = false;
        });
    }
    else insertBackground(customBackgroundImageData.value);
  }
  else removeBackground();
};

const getPathOptions = () => {
  loading.value = true;
  fetch('https://pic.majokeiko.com/path')
    .then(response => response.json())
    .then(response => {
      response.forEach((item: any) => {
        // @ts-ignore
        pathOptions.value.push({
          label: item.name,
          value: item.path
        });
      });
      loading.value = false;
    });
};

const pathOptionsSelect = (value: string) => {
  putLS('elaina-pathOptionsSelectValue', value);
  backgroundSwitch(true);
};

const resetBackgronud = () => {
  putLS('elaina-customBackgroundImageData', null);
  customBackgroundImageData.value = null;
  toggleStaticBackgroundUrl(false);
  backgroundSwitch(true);
};

const themeOverrides = {
  common: {
    inputColorDisabled: 'rgba(255, 255, 255, 0.1)',
    inputColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '24px'
  }
};

onMounted(() => {
  getPathOptions();
  if (backgroundStatus.value) backgroundSwitch(true);
  positionOverlay(positionY.value);
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
    background-position: var(--background-position);
    background-repeat: no-repeat;
    border: solid 1px #ffffff;
  }

  p {
    padding: 10px;
  }
}

.chip-slider {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 10px;
  border: 1px solid rgb(224, 224, 230);
  border-radius: 36px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .tag-input-overlay {
    margin-left: 4px;
    margin-right: 12px;
  }
}
</style>