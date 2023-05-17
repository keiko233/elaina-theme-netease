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

      <div class="elaina-btn-group" v-if="backgroundStatus">
        <div class="elaina-input">
          <input type="file" id="bg-imagefile" />
          <a>选择图片</a>
        </div>
        <div class="elaina-btn" @click="updateCustomBackgronud('bg-imagefile')">
          <a>应用</a>
        </div>
        <div class="elaina-btn" @click="resetBackgronud">
          <a>恢复默认</a>
        </div>
      </div>
      
      <template #description>
        少女祈祷中...
      </template>
    </n-spin>
  </ConfigCard>
</template>

<script setup lang="ts">
import { initLS, putLS } from '../utils/localStorage';
import { insertClassOnBody, insertStyle, removeClassOnBody, removeStyle } from '../utils/styleInsert';
import ConfigCard from './ConfigCard.vue';

const loading = ref(false);

const backgroundStatus = ref(initLS('elaina-backgroundStatus', false));

const customBackgroundImageData = ref(initLS('elaina-customBackgroundImageData', null));

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

const insertBackground = (data: string) => {
  removeBackground();
  const background = `:root{--background-image: url('${data}');}`;
  insertStyle('custom-background', background);
  insertClassOnBody('background-elaina-theme');
};

const removeBackground = () => {
  removeStyle('custom-background');
  removeClassOnBody('background-elaina-theme');
};

const updateCustomBackgronud = (id: string) => {
  // @ts-ignore
  const file = document.getElementById(id).files[0];
  if (!/image\/\w+/.test(file.type)) {
    alert("请确保文件为图像文件");
    return false;
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    putLS('elaina-customBackgroundImageData', this.result);
    customBackgroundImageData.value = this.result;
    insertBackground(customBackgroundImageData.value);
  }
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