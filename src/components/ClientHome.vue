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

    <n-space v-if="elainaThemeStatus" style="margin-top: 12px;">
      <Chip title="启用半透明框架">
        <n-switch v-model:value="elainaTranslucentFilletStatus" @update:value="elainaTranslucentFilletSwitch" />
      </Chip>

      <Chip title="启用内圆角">
        <n-switch v-model:value="elainaThemeFilletStatus" @update:value="elainaThemeFilletSwitch" />
      </Chip>
    </n-space>

  </ConfigCard>
</template>

<script setup lang="ts">
import { insertClassOnBody, removeClassOnBody } from '../utils/styleInsert';
import ConfigCard from './ConfigCard.vue';
import Chip from './Chip.vue';
import { customColorStyleStatus } from './CustomColor';
import { initLS, putLS } from '../utils/localStorage';

const elainaThemeStatus = ref(initLS('elaina-elainaThemeStatus', false));

const elainaThemeSwitch = (value: boolean) => {
  if (value) insertClassOnBody('client-elaina-theme');
  else removeClassOnBody('client-elaina-theme');
  putLS('elaina-elainaThemeStatus', value);
};

const elainaTranslucentFilletStatus = ref(initLS('elaina-elainaTranslucentFilletStatus', false));

const elainaTranslucentFilletSwitch = (value: boolean) => {
  if (value) insertClassOnBody('client-translucent-elaina-theme');
  else removeClassOnBody('client-translucent-elaina-theme');
  putLS('elaina-elainaTranslucentFilletStatus', value);
};

const elainaThemeFilletStatus = ref(initLS('elaina-elainaThemeFilletStatus', false));

const elainaThemeFilletSwitch = (value: boolean) => {
  if (value) insertClassOnBody('client-fillet-elaina-theme');
  else removeClassOnBody('client-fillet-elaina-theme');
  putLS('elaina-elainaThemeFilletStatus', value);
};

onMounted(() => {
  if (elainaThemeStatus.value) elainaThemeSwitch(true);
  if (elainaTranslucentFilletStatus.value) elainaTranslucentFilletSwitch(true);
  if (elainaThemeFilletStatus.value) elainaThemeFilletSwitch(true);
});
</script>