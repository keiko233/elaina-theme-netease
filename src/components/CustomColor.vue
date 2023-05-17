<template>
  <ConfigCard title="自定义主题色" illustrate="开启后会扬了网易云的自定义主题色，换成主题内置模块。设定后会全局自动计算其他颜色，类似于Material You的效果，但不完全是。">
    <n-space vertical :size="12">
      <n-switch v-model:value="customColorStyleStatus" @update:value="customColorStyleSwitch" size="large">
        <template #checked>
          使用主题内置模块
        </template>
        <template #unchecked>
          使用网易云默认
        </template>
      </n-switch>

      <n-color-picker v-if="customColorStyleStatus" placement="top-start" v-model:value="customColor" :modes="['hex']"
        :show-alpha="false" :actions="['confirm']" @confirm="insertComponentStyle" />

      <div v-if="customColorStyleStatus" class="config-color-card">
        <p>色彩列表预览</p>
        <n-space>
          <div class="config-color-perview" v-for="themeVarList in themeVarLists"
            :style="`${themeVarList.style}: var(--${themeVarList.name});`" v-text="themeVarList.name" />
        </n-space>
      </div>

      <div v-if="customColorStyleStatus" class="elaina-btn-group">
        <div class="elaina-btn" @click="insertComponentStyle('#ff1958')">
          <a>恢复主题默认</a>
        </div>
      </div>
    </n-space>
  </ConfigCard>
</template>

<script setup lang="ts">
import ConfigCard from "./ConfigCard.vue"
import { getDarkColor, getLightColor } from "../utils/colorMapping.ts";
import { checkClassOnBody, insertClassOnBody, insertStyle, removeClassOnBody, removeStyle } from "../utils/styleInsert";

const customColor = ref('#ff1958');

const customColorStyleStatus = ref(false);

const customColorStyleSwitch = (value: boolean) => {
  if (value == true) insertComponentStyle(customColor.value);
  else removeComponentStyle();
};

const themeVarLists = ref([
  { name: 'theme-primary', style: 'background-color' },
  { name: 'theme-primary-notransparency', style: 'background-color' },
  { name: 'theme-primary-shadow', style: 'box-shadow' },
  { name: 'theme-primary-font-shadow', style: 'text-shadow' }
]);

const insertCustomColorStyle = (value: string) => {
  const style = `:root {--theme-primary: ${value}A3;
    --theme-primary-notransparency: ${getLightColor(value, 0.2)};
    --theme-primary-shadow: 0 0 3px ${getDarkColor(getLightColor(value, 0.8), 0.2)};
    --theme-primary-font-shadow: 0 0 1px ${getDarkColor(getLightColor(value, 0.1), 0.1)};
    --themeC1: ${value};
    --themeC1-header: ${getLightColor(value, 0.2)};
    --themeSearch: rgba(0, 0, 0, 0.15);
    --themeC1-rgb: 237,65,65;
    --themeC1-hvr: ${getLightColor(value, 0.3)};
    --themePlay: ${getLightColor(value, 0.2)};
    --themePlay-hvr: ${getLightColor(value, 0.3)};
    --icnTheme: ${getLightColor(value, 0.1)};
    --icnTheme-hvr: ${getLightColor(value, 0.2)};
    --icnTheme-lighten: ${value};}`;
  insertStyle('custom-color-style', style);
};

const insertComponentStyle = (color: string) => {
  removeComponentStyle();
  insertCustomColorStyle(color);
  insertClassOnBody('elaina-theme');
  insertClassOnBody('s-theme-white');
};

const removeComponentStyle = () => {
  if (checkClassOnBody('elaina-theme')) removeClassOnBody('elaina-theme');
  if (checkClassOnBody('s-theme-white')) removeClassOnBody('s-theme-white');
  removeStyle('custom-color-style');
};
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
    border-radius: var(--border-radius);
    background-color: var(--background-overlay);
  }
}
</style>