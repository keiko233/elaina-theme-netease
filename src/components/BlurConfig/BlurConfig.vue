<template>
  <ConfigCard title="毛玻璃效果配置" illustrate="可能会对GPU性能会有一定开销，开启后提供配置选项。">
    <n-space vertical :size="12">

      <n-switch v-model:value="customBlurStatus" @update:value="customBlurSwitch" size="large">
        <template #checked>
          启用毛玻璃效果
        </template>
        <template #unchecked>
          禁用毛玻璃效果
        </template>
      </n-switch>

      <p v-if="customBlurStatus">注意，开启主页背景模糊后部分效果将会失效</p>

      <n-config-provider :theme-overrides="themeOverrides" v-if="customBlurStatus">
        <n-grid :x-gap="12" :y-gap="8" cols="2 400:2 600:4">

          <n-grid-item v-for="elementList in elementLists">
            <n-input-number :min="0" size="large" v-model:value="elementList.value"
              @update:value="updateCustomBlur(elementList.lsKey, elementList.value)">
              <template #prefix>
                <n-tag size="small" round :bordered="false" type="info" class="tag-input-overlay"
                  v-text="elementList.name" />
              </template>
            </n-input-number>
          </n-grid-item>

        </n-grid>
      </n-config-provider>

    </n-space>
  </ConfigCard>
</template>

<script setup lang="ts">
import { 
  insertCustomBlurStyle,
  updateCustomBlur,
  elementLists,
  removeCustomBlurStyle
} from '.';
import { initLS, putLS } from '../../utils/localStorage';
import ConfigCard from '../ConfigCard.vue';

const customBlurStatus = ref(initLS('elaina-customBlurStatus', false));

const customBlurSwitch = (value: boolean) => {
  if (value == true) insertCustomBlurStyle();
  else removeCustomBlurStyle();
  putLS('elaina-customBlurStatus', value);
};

const themeOverrides = {
  common: {
    inputColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '24px'
  }
};

onMounted(() => {
  if (customBlurStatus.value) insertCustomBlurStyle();
});
</script>

<style scoped lang="less">
.tag-input-overlay {
  margin-right: 8px;
  margin-left: 0;
  width: 76px;
  display: flex;
  justify-content: center;
}
</style>