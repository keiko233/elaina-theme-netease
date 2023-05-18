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
                <n-tag size="small" round :bordered="false" type="info" style="margin-right: 8px; margin-left: 0;"
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
import { initLS, putLS } from '../utils/localStorage';
import { insertStyle, removeStyle } from '../utils/styleInsert';
import ConfigCard from './ConfigCard.vue';

const customBlurStatus = ref(initLS('elaina-customBlurStatus', false));

const elementLists = ref([
  { 
    name: '主页背景', 
    value: initLS('elaina-blurHomeValue', 0), 
    lsKey: 'elaina-blurHomeValue', 
    style: '--theme-blur-home' 
  },
  { 
    name: '主页边框', 
    value: initLS('elaina-blurHomeFrameValue', 0), 
    lsKey: 'elaina-blurHomeFrameValue', 
    style: '--theme-blur-home-frame' 
  },
  { 
    name: '播放页', 
    value: initLS('elaina-blurPlayValue', 0), 
    lsKey: 'elaina-blurPlayValue', 
    style: '--theme-blur-play' 
  },
  { 
    name: '播放页底栏', 
    value: initLS('elaina-blurPlayDockValue', 0), 
    lsKey: 'elaina-blurPlayDockValue', 
    style: '--theme-blur-play-dock' 
  },
  { 
    name: '设置卡片', 
    value: initLS('elaina-blurConfigCardValue', 8), 
    lsKey: 'elaina-blurConfigCardValue', 
    style: '--theme-blur-config-card' 
  }
]);

const insertCustomBlurStyle = () => {
  const render = (name: string, value: number) => {
    if (value != 0) return `${name}:blur(${value}px);`
    else return '';
  };

  let style: string = ':root{';
  for (let i = 0; i < elementLists.value.length; i++) {
    style += render(elementLists.value[i].style, elementLists.value[i].value);
  }
  style += '};'

  insertStyle('custom-blur', style);
};

const removeCustomBlurStyle = () => {
  removeStyle('custom-blur');
};

const updateCustomBlur = (lsKey: string, value: number) => {
  putLS(lsKey, value);
  insertCustomBlurStyle();
};

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