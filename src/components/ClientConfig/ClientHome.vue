<template>
  <ConfigCard title="客户端首页样式" illustrate="全局修改网易云客户端样式，开启后有少量微调选项。">

    <n-tooltip trigger="hover" :disabled="customColorStyleStatus">
      <template #trigger>
        <n-switch v-model:value="elainaThemeStatus" @update:value="elainaThemeSwitch" size="large"
          :disabled="!customColorStyleStatus">
          <template #checked>
            注入主题样式
          </template>
          <template #unchecked>
            保持网易默认
          </template>
        </n-switch>
      </template>
      启用需要先开启自定义主题色，不然颜色无法正常显示
    </n-tooltip>

    <n-grid :x-gap="12" :y-gap="8" cols="2 300:3 600:4 800:6" style="margin-top: 12px;" v-if="elainaThemeStatus">

      <n-grid-item v-for="elementList in elementLists">
        <n-tooltip trigger="hover" :disabled="!elementList.tip">
          <template #trigger>
            <Chip :title="elementList.title">
              <n-switch v-model:value="elementList.valueModel" @update:value="elementList.update" />
            </Chip>
          </template>
          {{ elementList.tip }}
        </n-tooltip>
      </n-grid-item>

    </n-grid>

  </ConfigCard>
</template>

<script setup lang="ts">
import {
  elainaThemeFilletStatus,
  elainaThemeFilletSwitch,
  elainaThemeStatus,
  elainaThemeSwitch,
  elainaTranslucentFilletStatus,
  elainaTranslucentFilletSwitch,
  elainaFontHighContrastStatus,
  elainaFontHighContrastSwitch,
  removeNavVideoStatus,
  removeNavVideoSwitch,
  removeNavLookStatus,
  removeNavLookSwitch
} from '.';
import ConfigCard from './../ConfigCard.vue';
import { customColorStyleStatus } from './../CustomColor';

const elementLists = ref([
  {
    title: "启用半透明框架",
    valueModel: elainaTranslucentFilletStatus.value,
    update: elainaTranslucentFilletSwitch
  },
  {
    title: "启用内圆角",
    valueModel: elainaThemeFilletStatus.value,
    update: elainaThemeFilletSwitch
  },
  {
    title: "文字高对比度",
    tip: "增强部分场景下文字的对比度，防止看不清。",
    valueModel: elainaFontHighContrastStatus.value,
    update: elainaFontHighContrastSwitch
  },
  {
    title: "移除侧边栏视频",
    valueModel: removeNavVideoStatus.value,
    update: removeNavVideoSwitch
  },
  {
    title: "移除侧边栏直播",
    valueModel: removeNavLookStatus.value,
    update: removeNavLookSwitch
  }
]);

onMounted(() => {
  if (elainaThemeStatus.value) elainaThemeSwitch(true);
  for (let i = 0; i < elementLists.value.length; i++) {
    if (elementLists.value[i].valueModel) elementLists.value[i].update(true);
  }
});
</script>