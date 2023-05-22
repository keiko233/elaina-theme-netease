<template>
  <ConfigCard title="主题播放器" illustrate="Elaina主题播放器，我觉得好看。如果关闭后仍然遇到布局问题请尝试重载。">
    <n-switch v-model:value="elainaPlayerStatus" @update:value="elainaPlayerSwitch" size="large">
      <template #checked>
        注入主题播放器
      </template>
      <template #unchecked>
        保持网易默认
      </template>
    </n-switch>

    <n-config-provider :theme-overrides="themeOverrides" v-if="elainaPlayerStatus">
      <n-grid :x-gap="12" :y-gap="8" cols="2" style="margin-top: 8px;">

        <n-grid-item>
          <n-space vertical>
            <n-tag round :bordered="false" type="success" class="tag-title-overlay">
              待选歌词
            </n-tag>

            <n-input-number :min="0" size="large" v-model:value="nonSelectFontSize" @update:value="updateValue">
              <template #prefix>
                <n-tag size="small" round :bordered="false" type="info" class="tag-input-overlay">
                  字体大小
                </n-tag>
              </template>
            </n-input-number>

            <n-input-number :min="0" size="large" v-model:value="nonSelectLineHeight" @update:value="updateValue">
              <template #prefix>
                <n-tag size="small" round :bordered="false" type="info" class="tag-input-overlay">
                  字体行高
                </n-tag>
              </template>
            </n-input-number>

            <div class="chip-slider">
              <n-tag size="small" round :bordered="false" type="info" class="tag-input-overlay">
                字体宽度
              </n-tag>
              <n-slider style="width: 64%" v-model:value="nonSelectFontWidth" :step="100" :min="100" :max="900"
                @update:value="updateValue" />
            </div>

          </n-space>
        </n-grid-item>

        <n-grid-item>
          <n-space vertical>
            <n-tag round :bordered="false" type="success" class="tag-title-overlay">
              选中歌词
            </n-tag>

            <n-input-number :min="0" size="large" v-model:value="selectFontSize" @update:value="updateValue">
              <template #prefix>
                <n-tag size="small" round :bordered="false" type="info" class="tag-input-overlay">
                  字体大小
                </n-tag>
              </template>
            </n-input-number>

            <n-input-number :min="0" size="large" v-model:value="selectLineHeight" @update:value="updateValue">
              <template #prefix>
                <n-tag size="small" round :bordered="false" type="info" class="tag-input-overlay">
                  字体行高
                </n-tag>
              </template>
            </n-input-number>

            <div class="chip-slider">
              <n-tag size="small" round :bordered="false" type="info" class="tag-input-overlay">
                字体宽度
              </n-tag>
              <n-slider style="width: 64%" v-model:value="selectFontWidth" :step="100" :min="100" :max="900"
                @update:value="updateValue" />
            </div>

          </n-space>
        </n-grid-item>

        <n-grid-item>
          <Chip title="顶部歌名显示">
            <n-switch v-model:value="songNameOnTopStatus" @update:value="songNameOnTopSwitch" />
          </Chip>
        </n-grid-item>

        <n-grid-item>
          <n-tooltip trigger="hover" :disabled="!songInfoOnPlayerStatus">
            <template #trigger>
              <Chip title="播放页歌曲信息显示">
                <n-switch v-model:value="songInfoOnPlayerStatus" @update:value="songInfoOnPlayerSwitch" />
              </Chip>
            </template>
            关闭将重载网易云以生效。
          </n-tooltip>
        </n-grid-item>

      </n-grid>
    </n-config-provider>
  </ConfigCard>
</template>

<script setup lang="ts">
import {
  elainaPlayerStatus,
  elainaPlayerSwitch,
  songInfoOnPlayerStatus,
  songInfoOnPlayerSwitch,
  songNameOnTopStatus,
  songNameOnTopSwitch,
  nonSelectFontSize,
  nonSelectLineHeight,
  nonSelectFontWidth,
  selectFontSize,
  selectLineHeight,
  selectFontWidth,
  updateValue
} from '.';

const themeOverrides = {
  common: {
    inputColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '24px'
  }
};

onMounted(() => {
  if (elainaPlayerStatus.value) elainaPlayerSwitch(true);
  if (songNameOnTopStatus.value) songNameOnTopSwitch(true);
  if (songInfoOnPlayerStatus.value) songInfoOnPlayerSwitch(true);
});
</script>

<style scoped lang="less">
.tag-title-overlay {
  width: 100%;
  display: flex;
  justify-content: center;
}

.tag-input-overlay {
  margin-right: 8px;
  margin-left: 0;
  width: 76px;
  display: flex;
  justify-content: center;
}

.chip-slider {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 10px;
  border: 1px solid rgb(224, 224, 230);
  border-radius: 36px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .tag-input-overlay {
    margin-left: 4px;
    margin-right: 12px;
  }
}
</style>