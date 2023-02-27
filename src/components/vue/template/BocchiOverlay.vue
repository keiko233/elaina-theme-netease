<template>
  <div class="config-card">
    <n-spin :show="bocchiOverlayLoadingStatus">
      <h3>波奇酱小挂件</h3>
      <p>启用需要网络连接，用于请求Gist和下载图片。给朋友做的彩蛋功能，没啥用，纯粹好玩。</p>
      <n-radio-group v-model:value="bocchiOverlaySelect" @update:value="bocchiOverlaySwitch">
        <n-radio-button value=-1 label='禁用' />
        <n-radio-button v-for="bocchiList in bocchiLists" :key="bocchiList.id" :value="bocchiList.id"
          :label="bocchiList.name" :disabled="bocchiList.id == null" />
        <n-radio-button value=-2 label='自定义' />
      </n-radio-group>
      <template #description>
        请求Gist中
      </template>
    </n-spin>

    <div class="content">
      <div v-if="bocchiOverlaySelect == -2" class="elaina-btn-group">
        <div class="elaina-input">
          <input type="file" id="imagefile" />
          <a>选择图片</a>
        </div>
        <div class="elaina-btn" @click="updateBocchiImage('imagefile')">
          <a>应用</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NSwitch, NSpin, NRadioGroup, NRadioButton } from 'naive-ui'
import isNCMClient from "../../js/ClientCheck.js"

const setBocchiOverlay = (value) => {
  const header = document.getElementById('music-163-com');

  if (value) {
    if (isNCMClient()) header.classList.add('bocchi-overlay');
    if (document.getElementById('bocchi-overlay-image')) {
      document.head.removeChild(document.getElementById('bocchi-overlay-image'));
    }
    const style = document.createElement("style");
    style.id = 'bocchi-overlay-image'
    style.innerHTML = `
      body#music-163-com.bocchi-overlay::before {
        background-image: url(${localStorage.getItem('bocchiOverlayImageData')})
    }`;
    document.head.appendChild(style);
  } else {
    document.head.removeChild(document.getElementById('bocchi-overlay-image'));
    if (isNCMClient()) header.classList.remove('bocchi-overlay');
  }
}

if (!localStorage.getItem('bocchiOverlaySelectValue')) {
  localStorage.setItem('bocchiOverlaySelectValue', -1)
}

const bocchiOverlaySelect = ref(JSON.parse(localStorage.getItem('bocchiOverlaySelectValue')));
const bocchiOverlayLoadingStatus = ref(false);

const bocchiLists = ref([
  {
    id: null,
    name: 'Loading',
    url: ''
  }
])

const bocchiOverlaySwitch = (value) => {
  localStorage.setItem('bocchiOverlaySelectValue', value);
  if (value == -1) {
    setBocchiOverlay(false);
  } else if (value == -2) {

  } else {
    bocchiOverlayLoadingStatus.value = true;
    fetch(bocchiLists.value[value].url)
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem('bocchiOverlayImageData', json.response[0].content);
        bocchiOverlayLoadingStatus.value = false;
        setBocchiOverlay(true);
      });
  }
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
    localStorage.setItem('bocchiOverlayImageData', this.result);
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
  if (bocchiOverlaySelect.value >= 0 && isNCMClient()) {
    setBocchiOverlay(true);
  }
  getBocchiLists();
})
</script>

<style lang="less" scoped>
.config-card {
  .content {
    padding-top: 10px;
  }
}
</style>