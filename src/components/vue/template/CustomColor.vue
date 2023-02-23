<template>
  <div class="config-card">
    <h3>自定义主题色</h3>
    <p>如果你不喜欢默认的粉色的话就自己修改吧。设定后会全局自动计算其他颜色，类似于Material You的效果，但不完全是。</p>
    <n-color-picker placement="top-start" v-model:value="customColor" :modes="['hex']" :show-alpha="false"
      :actions="['confirm']" @confirm="updateCustomColor" />
    <div class="config-color-card">
      <p>色彩列表</p>
      <div class="config-color-perview" style="background-color: var(--theme-primary);">
        theme-primary
      </div>
      <div class="config-color-perview" style="background-color: var(--theme-primary-notransparency);">
        theme-primary-notransparency
      </div>
      <div class="config-color-perview" style="box-shadow: var(--theme-primary-shadow);">
        theme-primary-shadow
      </div>
      <div class="config-color-perview" style="text-shadow: var(--theme-primary-font-shadow);">
        theme-primary-font-shadow
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NColorPicker } from 'naive-ui'
import { getDarkColor, getLightColor } from '../../js/ColorMapping.js'

const customColorStyle = (value) => {
  const style = document.createElement("style");
  style.id = 'custom-color'
  style.innerHTML = `
  :root {
    --theme-primary: ${value}A3;
    --theme-primary-notransparency: ${getLightColor(value, 0.2)};
    --theme-primary-shadow: 0 0 3px ${getDarkColor(getLightColor(value, 0.8), 0.2)};
    --theme-primary-font-shadow: 0 0 1px ${getDarkColor(getLightColor(value, 0.1), 0.1)};
  }`;
  document.head.appendChild(style);
}

if (!localStorage.getItem('customColorValue')) {
  localStorage.setItem('customColorValue', '#FF1958');
}

const customColor = ref(localStorage.getItem('customColorValue'))

const updateCustomColor = (value) => {
  localStorage.setItem('customColorValue', value);
  document.head.removeChild(document.getElementById('custom-color'));
  customColorStyle(value);
}

onMounted(() => {
  customColorStyle(localStorage.getItem('customColorValue'));
})

</script>

<style lang="less" scoped>
.config-color-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  p {
    width: 100%;
  }

  .config-color-perview {
    width: 260px;
    padding: 10px;
    margin: 0 10px 10px 0;
    border-radius: var(--border-raduis);
<<<<<<< HEAD
    background-color: var(--background-overlay);
=======
>>>>>>> 6703b76fcadba78316902486cbf8728295e9cb81
  }
}
</style>