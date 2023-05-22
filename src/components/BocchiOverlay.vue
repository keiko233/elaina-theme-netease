<template>
  <n-spin :show="loading">
    <ConfigCard title="波奇酱小挂件" illustrate="启用需要网络连接，用于请求Gist和下载图片，支持自定义。给朋友做的彩蛋功能，没啥用，纯粹好玩。">
      <n-space vertical>

        <n-switch v-model:value="bocchiOverlayStatus" @update:value="bocchiOverlaySwitch" size="large">
          <template #checked>
            启用小挂件
          </template>
          <template #unchecked>
            关闭小挂件
          </template>
        </n-switch>

        <n-config-provider :theme-overrides="themeOverrides" v-if="bocchiOverlayStatus">
          <n-select v-model:value="overlayOptionsSelectValue" :options="overlayOptions"
            @update:value="overlayOptionsSelect" :disabled="!overlayOptions[0]" />
        </n-config-provider>

        <div class="chip-slider" v-if="bocchiOverlayStatus">
          <n-tag size="small" round :bordered="false" type="info" class="tag-input-overlay">
            缩放调整
          </n-tag>
          <n-slider style="width: calc(100% - 64px)" v-model:value="bocchiOverlaySize"
            @update:value="bocchiOverlaySizeUpdate" :step="1" :min="0" :max="100" />
        </div>

        <ImageInput v-if="overlayOptionsSelectValue == 'custom' && bocchiOverlayStatus" :id="'bocchi-imagefile'"
          :useFunc="() => updateCustomOverlay('bocchi-imagefile')" />

      </n-space>
    </ConfigCard>
    <template #description>
      少女祈祷中...
    </template>
  </n-spin>
</template>

<script setup lang="ts">
import { initLS, putLS } from '../utils/localStorage';
import { insertClassOnBody, insertStyle, removeClassOnBody, removeStyle } from '../utils/styleInsert';

const loading = ref(false);

const bocchiOverlayStatus = ref(initLS('elaina-bocchiOverlayStatus', false));

const bocchiOverlaySwitch = (value: boolean) => {
  if (value) {
    getOverlayLists();
    insertBocchiOverlay();
  }
  else {
    removeBocchiOverlay();
    overlayOptions.value = [];
  }
  putLS('elaina-bocchiOverlayStatus', value);
};

const overlayOptions = ref([]);

const overlayOptionsSelectValue = ref(initLS('elaina-overlayOptionsSelectValue', null));
const bocchiOverlayImageData = ref(initLS('elaina-bocchiOverlayImageData', null));
const bocchiOverlaySize = ref(initLS('elaina-bocchiOverlaySize', 20));

const overlayOptionsSelect = (value: string) => {
  if (overlayOptionsSelectValue.value !== 'custom') {
    loading.value = true;
    fetch(value)
      .then((response) => response.json())
      .then((json) => {
        bocchiOverlayImageData.value = json.response[0].content;
        putLS('elaina-bocchiOverlayImageData', json.response[0].content);
        loading.value = false;
        insertBocchiOverlay();
      });
  }
  putLS('elaina-overlayOptionsSelectValue', value);
};

const getOverlayLists = () => {
  loading.value = true;
  fetch('https://gist.githubusercontent.com/keiko233/a61d922c32a9b05b3ff2623305dd3faf/raw/list')
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.response.length; i++) {
        // @ts-ignore
        overlayOptions.value.push({
          label: json.response[i].name,
          value: json.response[i].url
        });
      }
      // @ts-ignore
      overlayOptions.value.push({
        label: '自定义',
        value: 'custom'
      });
      loading.value = false;
    });
};

const insertBocchiOverlay = () => {
  const style = `body#music-163-com.bocchi-overlay::before{ background-image: url('${bocchiOverlayImageData.value}');
    background-size: ${bocchiOverlaySize.value}%;}`;
  insertStyle('bocchi-overlay', style);
  insertClassOnBody('bocchi-overlay');
};

const removeBocchiOverlay = () => {
  removeStyle('bocchi-overlay');
  removeClassOnBody('bocchi-overlay');
};

const bocchiOverlaySizeUpdate = (value: number) => {
  initLS('elaina-bocchiOverlaySize', value);
  removeBocchiOverlay();
  insertBocchiOverlay();
};

const updateCustomOverlay = (id: string) => {
  // @ts-ignore
  const file = document.getElementById(id).files[0];
  if (!/image\/\w+/.test(file.type)) {
    alert("请确保文件为图像文件");
    return false;
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    putLS('elaina-bocchiOverlayImageData', this.result);
    bocchiOverlayImageData.value = this.result;
    insertBocchiOverlay();
  }
};

const themeOverrides = {
  common: {
    inputColorDisabled: 'rgba(255, 255, 255, 0.1)',
    inputColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '24px'
  }
};

onMounted(() => {
  if (bocchiOverlayStatus.value) bocchiOverlaySwitch(true);
});
</script>

<style scoped lang="less">
.chip-slider {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 10px;
  border: 1px solid rgb(224, 224, 230);
  border-radius: 36px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .tag-input-overlay {
    margin-left: 4px;
    margin-right: 12px;
  }
}
</style>