<template>
  <div class="config-card">
    <h3>自定义背景</h3>
    <p>
      主题内置的自定义背景和BGEnhanced实现方式有所出入，所以才有这个选项，建议只用一个，否则出锅我不背（<br />
      默认的背景设置是使用 https://pic.majokeiko.com 图库API请求的随机伊蕾娜。如果你要自定义背景，建议大小不要太大。
    </p>

    <div class="preview">
      <div class="left">
        <p>原始图片</p>
      </div>
      <div class="right">
        <p>缩放后</p>
      </div>
    </div>

    <div class="elaina-btn-group">
      <div class="elaina-input">
        <input type="file" id="bg-imagefile" />
        <a>选择图片</a>
      </div>
      <div class="elaina-btn" @click="updateCustomBackgronud('bg-imagefile')">
        <a>应用</a>
      </div>
      <div class="elaina-btn" @click="resetCustomBackgronud">
        <a>恢复默认</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { updateLS, getLS, delLS } from "../../js/LocalStorage"
import { insertStyle } from "../../js/StyleInsert"

const setBackgroundImage = (value) => {
  function addStyle (data) {
    const style = `:root{ --background-image: url(${data}); }`;
    insertStyle('background-iamge', style)
  }

  if (value) {
    addStyle(getLS('customBackgroundImageData'));
  } else {
    addStyle('https://pic.majokeiko.com');
  }
}

if (!localStorage.getItem('enableRandomBackgroundValue')) {
  localStorage.setItem('enableRandomBackgroundValue', true);
}

const resetCustomBackgronud = () => {
  updateLS('enableRandomBackgroundValue', true);
  delLS('customBackgroundImageData');
  setBackgroundImage(false);
}

const updateCustomBackgronud = (id) => {
  updateLS('enableRandomBackgroundValue', false);
  const file = document.getElementById(id).files[0];
  if (!/image\/\w+/.test(file.type)) {
    alert("请确保文件为图像文件");
    return false;
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    updateLS('customBackgroundImageData', this.result);
    setBackgroundImage(true);
  }
}

onMounted(() => {
  if (getLS('enableRandomBackgroundValue')) {
    setBackgroundImage(false);
  } else {
    setBackgroundImage(true);
  }
})

</script>

<style lang="less" scoped>
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
  }

  .right {
    height: 100%;
    width: 290px;
    background-image: var(--background-image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  p {
    padding: 10px;
  }

}
</style>
