<template>
  <div class="config-card">
    <n-spin :show="bocchiOverlayLoadingStatus">
      <h3>波奇酱小挂件</h3>
      <p>启用需要网络连接，用于下载图片。给朋友做的彩蛋功能，没啥用，纯粹好玩。</p>
      <n-switch v-model:value="bocchiOverlayStatus" @update:value="bocchiOverlaySwitch" size="large">
        <template #checked>
          启用
        </template>
        <template #unchecked>
          关闭
        </template>
      </n-switch>
    </n-spin>

    <p>或者你也可以自定义图片。</p>
    <div class="elaina-btn-group">
      <div class="elaina-input">
        <input type="file" id="imagefile" />
        <a>选择图片</a>
      </div>
      <div class="elaina-btn" @click="updateBocchiImage('imagefile')">
        <a>应用</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NSwitch, NSpin } from 'naive-ui'
import isNCMClient from "../../js/ClientCheck.js"

const setBocchiOverlay = (value) => {
  const header = document.getElementById('music-163-com');

  if (value) {
    header.classList.add('bocchi-overlay');
    const style = document.createElement("style");
    style.id = 'bocchi-overlay-image'
    style.innerHTML = `
      body#music-163-com.bocchi-overlay::before {
        background-image: url(${localStorage.getItem('bocchiOverlayImageData')})
    }`;
    document.head.appendChild(style);
  } else {
    document.head.removeChild(document.getElementById('bocchi-overlay-image'));
    header.classList.remove('bocchi-overlay');
  }
}

if (!localStorage.getItem('enableBocchiOverlay')) {
  localStorage.setItem('enableBocchiOverlay', 'false')
}

const bocchiOverlayStatus = ref(JSON.parse(localStorage.getItem('enableBocchiOverlay')));
const bocchiOverlayLoadingStatus = ref(false);

const bocchiOverlaySwitch = (value) => {
  if (value && !localStorage.getItem('bocchiOverlayImageData')) {
    bocchiOverlayLoadingStatus.value = true;
    fetch('https://gist.githubusercontent.com/keiko233/a61d922c32a9b05b3ff2623305dd3faf/raw/3a0892747b5feabeda841687416ee5a5cb437beb/base64image_bocchi')
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem('bocchiOverlayImageData', json.response[0].content);
        bocchiOverlayLoadingStatus.value = false;

      });
  }
  localStorage.setItem('enableBocchiOverlay', value);
  setBocchiOverlay(value);
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
    setBocchiOverlay(false);
    setBocchiOverlay(true);
  }
}

onMounted(() => {
  if (bocchiOverlayStatus.value == true && isNCMClient()) {
    setBocchiOverlay(true);
  }
})
</script>