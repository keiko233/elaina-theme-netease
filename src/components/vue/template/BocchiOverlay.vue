<template>
  <div class="config-card">
    <n-spin :show="bocchiOverlayLoadingStatus">
      <h3>波奇酱小挂件</h3>
      <p>启用需要网络连接，用于请求Gist和下载图片。给朋友做的彩蛋功能，没啥用，纯粹好玩。</p>

      <n-space vertical>
        <n-radio-group v-model:value="bocchiOverlayStatus" @update:value="bocchiOverlayStatusSwitch">
          <n-radio-button value=-1 label='禁用' />
          <n-radio-button value=0 label='使用预设' />
          <n-radio-button value=-2 label='自定义' />
        </n-radio-group>

        <n-select v-if="bocchiOverlayStatus == 0" v-model:value="bocchiOverlaySelect" @update:value="bocchiOverlaySwitch"
          label-field="name" value-field="id" :options="bocchiLists" />

        <div class="content">
          <div v-if="bocchiOverlayStatus == -2" class="elaina-btn-group">
            <div class="elaina-input">
              <input type="file" id="imagefile" />
              <a>选择图片</a>
            </div>
            <div class="elaina-btn" @click="updateBocchiImage('imagefile')">
              <a>应用</a>
            </div>
          </div>
        </div>
      </n-space>

      <div class="input-box" v-if="bocchiOverlayStatus != -1">
        <p>图片缩放大小</p>
        <div class="input-content">
          <n-slider v-model:value="bocchiOverlayBackgroundSize" :step="1" :min="0" :max="100"
            @update:value="updateBocchiOverlaySize" />
        </div>
      </div>

      <template #description>
        请求Gist中
      </template>
    </n-spin>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NSpin, NRadioGroup, NRadioButton, NSelect, NSpace, NSlider } from 'naive-ui'
import isNCMClient from "../../js/ClientCheck.js"
import { initLS, updateLS, getLS } from "../../js/LocalStorage"
import { insertStyle, removeStyle } from "../../js/StyleInsert"

const setBocchiOverlay = (value, size) => {
  const header = document.getElementById('music-163-com');

  if (value) {
    if (isNCMClient()) header.classList.add('bocchi-overlay');
    const style = `body#music-163-com.bocchi-overlay::before{ 
      background-image: url('${getLS('bocchiOverlayImageData')}');
      background-size: ${bocchiOverlayBackgroundSize.value}%;
    }`;
    insertStyle('bocchi-overlay-image', style);
  } else {
    removeStyle('bocchi-overlay-image');
    if (isNCMClient()) header.classList.remove('bocchi-overlay');
  }
}

const updateBocchiOverlaySize = (size) => {
  updateLS('bocchiOverlayBackgroundSizeValue', size);
  setBocchiOverlay(true);
}

const bocchiOverlaySelect = ref(initLS('bocchiOverlaySelectValue', null));
const bocchiOverlayStatus = ref(initLS('bocchiOverlayStatusValue', -1));
const bocchiOverlayBackgroundSize = ref(initLS('bocchiOverlayBackgroundSizeValue', 20));
const bocchiOverlayLoadingStatus = ref(false);

const bocchiLists = ref([
  {
    id: null,
    name: 'Loading',
    url: ''
  }
])

const bocchiOverlaySwitch = (value) => {
  updateLS('bocchiOverlaySelectValue', value);
  bocchiOverlayLoadingStatus.value = true;
  fetch(bocchiLists.value[value].url)
    .then((response) => response.json())
    .then((json) => {
      updateLS('bocchiOverlayImageData', json.response[0].content);
      bocchiOverlayLoadingStatus.value = false;
      setBocchiOverlay(true);
    });
}

const bocchiOverlayStatusSwitch = (value) => {
  if (value == -1) setBocchiOverlay(false);
  updateLS('bocchiOverlayStatusValue', value);
}

const updateBocchiImage = (id) => {
  const file = document.getElementById(id).files[0];
  if (!/image\/\w+/.test(file.type)) {
    alert("请确保文件为图像文件");
    return false;
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    updateLS('bocchiOverlayImageData', this.result);
    setBocchiOverlay(true);
  }
}

const getBocchiLists = () => {
  bocchiOverlayLoadingStatus.value = true;
  fetch('https://gist.githubusercontent.com/keiko233/a61d922c32a9b05b3ff2623305dd3faf/raw/list')
    .then((response) => response.json())
    .then((json) => {
      bocchiOverlayLoadingStatus.value = false;
      bocchiLists.value = json.response;
    });
}

onMounted(() => {
  if (isNCMClient() && !(bocchiOverlayStatus.value == -1) && !(bocchiOverlaySelect.value == null)) {
    setBocchiOverlay(true, getLS(bocchiOverlayBackgroundSizeValue));
  }
  getBocchiLists();
})
</script>

<style lang="less" scoped>
@import "../../../assets/style/custom/configCommon.less";

.config-card {
  .content {
    padding: 10px 0;
  }

  .input-box {
    padding-bottom: 12px;
  }
}
</style>