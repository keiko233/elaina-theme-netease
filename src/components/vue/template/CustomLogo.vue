<template>
  <div class="config-card">
    <h3>自定义Logo</h3>
    <p>
      首次加载需要网络请求，这会自动完成。如果你没有看到Logo的话，大概是连不上GitHub，或者是我又写出了Bug（<br>
      当然你也可以自定义，不建议尺寸太大。
    </p>

    <n-spin :show="logoPreviewLoadingStatus">
      <div class="preview" />
      <template #description>
        请求Gist中
      </template>
    </n-spin>

    <div class="elaina-btn-group">
      <div class="elaina-input">
        <input type="file" id="logo-imagefile" />
        <a>选择图片</a>
      </div>
      <div class="elaina-btn" @click="updateCustomLogo('logo-imagefile')">
        <a>应用</a>
      </div>
      <div class="elaina-btn" @click="resetCustomLogo">
        <a>恢复默认</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"
import { NSpin } from 'naive-ui'
import isNCMClient from "../../js/ClientCheck.js"

const setCustomLogo = (value) => {
  if (value) {
    const style = document.createElement('style');
    style.id = 'custom-logo';
    style.innerHTML = `
    :root {
      --custom-logo: url('${localStorage.getItem('customLogoImageData')}')
    }`;
    document.head.appendChild(style);

    if (isNCMClient()) {
      document.querySelector(".m-logo").querySelector("a").innerHTML = `<div class="elaina-custom-logo" style="background-image: var(--custom-logo);"></div>`;
    }
  } else {
    document.head.removeChild(document.getElementById('custom-logo'));
  }
}

const logoPreviewLoadingStatus = ref(false);

const defaultLogo = () => {
  logoPreviewLoadingStatus.value = true;
  fetch('https://gist.githubusercontent.com/keiko233/a61d922c32a9b05b3ff2623305dd3faf/raw/11ab2f92f5c6e077237b92a7012d6cef7bc0a962/base64image_majonotabitabi_logo')
    .then((response) => response.json())
    .then((json) => {
      logoPreviewLoadingStatus.value = false;
      localStorage.setItem('customLogoImageData', json.response[0].content);
      setCustomLogo(true);
    });
}

const updateCustomLogo = (id) => {
  const file = document.getElementById(id).files[0];
  if (!/image\/\w+/.test(file.type)) {
    alert("请确保文件为图像文件");
    return false;
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    localStorage.setItem('customLogoImageData', this.result);
    setCustomLogo(true);
  }
}

const resetCustomLogo = () => {
  setCustomLogo(false);
  defaultLogo();
}

onMounted(() => {
  if (localStorage.getItem('customLogoImageData') == null) {
    defaultLogo();
  }
  setCustomLogo(true);
})

</script>

<style lang="less" scoped>
@import "../../../assets/style/custom/configCommon.less";

.preview {
  height: 100px;
  width: 100%;
  background-image: var(--custom-logo);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
