<template>
  <ConfigCard title="客户端首页样式" illustrate="全局修改网易云客户端样式，开启后有少量微调选项。包括但不限于精简、美化、布局优化等功能。">

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

    <n-grid :x-gap="12" :y-gap="8" cols="2 900:3 1200:4" style="margin-top: 12px;" v-if="elainaThemeStatus">

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
  elainaThemeStatus,
  elainaThemeSwitch,
  elementLists
} from '.';
import { customColorStyleStatus } from './../CustomColor';

onMounted(() => {
  if (elainaThemeStatus.value) elainaThemeSwitch(true);
  for (let i = 0; i < elementLists.value.length; i++) {
    if (elementLists.value[i].valueModel) elementLists.value[i].update(true);
  }
});
</script>