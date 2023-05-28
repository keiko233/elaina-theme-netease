<template>
  <ConfigCard title="自定义Logo" illustrate="加载默认Logo需要网络请求，当然你也可以自定义，不建议尺寸太大。">
    <n-spin :show="laoding">

      <n-tooltip trigger="hover" :disabled="!customLogoStatus">
        <template #trigger>
          <n-switch v-model:value="customLogoStatus" @update:value="customLogoSwitch" size="large">
            <template #checked>
              使用自定义Logo
            </template>
            <template #unchecked>
              使用网易云默认
            </template>
          </n-switch>
        </template>
        关闭将重载网易云以生效。
      </n-tooltip>

      <div class="preview" v-if="customLogoStatus" />

      <ImageInput v-if="customLogoStatus" :id="'logo-imagefile'" :useFunc="() => updateCustomLogo('logo-imagefile')" :resetFunc="resetLogo" />

      <template #description>
        少女祈祷中...
      </template>
    </n-spin>
  </ConfigCard>
</template>

<script setup lang="ts">
import { isNCMClient } from '../../utils/clientCheck';
import { getImageData } from '../../utils/imageUtils';
import { initLS, putLS } from '../../utils/localStorage';
import { insertStyle, removeStyle } from '../../utils/styleInsert';

const laoding = ref(false);

const customLogoStatus = ref(initLS('elaina-customLogoStatus', false));

const customLogoImageData = ref(initLS('elaina-customLogoImageData', null));

const customLogoSwitch = (value: boolean) => {
  putLS('elaina-customLogoStatus', value);
  if (value) {
    if (customLogoImageData.value == null) {
      laoding.value = true;
      fetch('https://gist.githubusercontent.com/keiko233/a61d922c32a9b05b3ff2623305dd3faf/raw/base64image_majonotabitabi_logo')
        .then((response) => response.json())
        .then((json) => {
          customLogoImageData.value = json.response[0].content;
          putLS('elaina-customLogoImageData', json.response[0].content);
          insertLogo();
          laoding.value = false;
        });
    }
    else {
      insertLogo();
    }
  }
  else {
    removeLogo();
  }
};

const insertLogo = () => {
  insertStyle('custom-logo', `:root{--custom-logo: url('${customLogoImageData.value}');}`);
  // @ts-ignore
  if (isNCMClient()) document.querySelector(".m-logo").querySelector("a").innerHTML = `<div class="elaina-custom-logo" style="background-image:var(--custom-logo);"></div>`;
};

const removeLogo = () => {
  removeStyle('custom-logo');
  // @ts-ignore
  if (isNCMClient()) betterncm_native.app.reloadIgnoreCache();
};

const resetLogo = () => {
  customLogoImageData.value = null;
  putLS('elaina-customLogoImageData', null);
  customLogoSwitch(true);
};

const updateCustomLogo = (id: string) => {
  getImageData(id, (result) => {
    putLS('elaina-customLogoImageData', result);
    customLogoImageData.value = result;
    insertLogo();
  });
};

onMounted(() => {
  if (customLogoStatus.value) insertLogo();
});
</script>

<style scoped lang="less">
.preview {
  height: 100px;
  width: 100%;
  background-image: var(--custom-logo);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>