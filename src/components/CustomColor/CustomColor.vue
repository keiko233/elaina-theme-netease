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

      <div v-if="customColorStyleStatus">
        <p>预设列表</p>
        <div class="elaina-btn-group">
          <div class="elaina-btn" v-for="colorPresetList in colorPresetLists"
            @click="insertComponentStyle(colorPresetList.value)">
            <a :style="'background-color:' + colorPresetList.value" v-text="colorPresetList.name" />
          </div>
        </div>

        <p>自定义</p>
        <n-color-picker placement="top-start" v-model:value="customColor" :modes="['hex']" :show-alpha="false"
          :actions="['confirm']" @confirm="insertComponentStyle" />

        <div class="config-color-card">
          <p>色彩列表预览</p>
          <div class="grid">
            <div class="config-color-perview" v-for="themeVarList in themeVarLists"
              :style="`${themeVarList.style}: var(--${themeVarList.name});`" v-text="themeVarList.name" />
          </div>
        </div>
      </div>
    </n-space>
  </ConfigCard>
</template>

<script setup lang="ts">
import {
  customColorStyleStatus,
  customColor,
  insertComponentStyle,
  removeComponentStyle,
  themeVarLists,
  colorPresetLists
} from "./index.ts";
import { putLS } from "../../utils/localStorage";

const customColorStyleSwitch = (value: boolean) => {
  if (value == true) insertComponentStyle(customColor.value);
  else removeComponentStyle();
  putLS('elaina-customColorStyleStatus', value);
};

onMounted(() => {
  if (customColorStyleStatus.value) insertComponentStyle(customColor.value);
});
</script>

<style lang="less" scoped>
.config-color-card {
  p {
    width: 100%;
  }


  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;

    .config-color-perview {
    width: 260px;
    padding: 10px;
    border-radius: var(--border-radius);
    background-color: var(--background-overlay);
  }
  }
}
</style>