<template>
  <div class="config-card">
    <h3>播放页歌词设置</h3>
    <p>我的建议，默认别调（</p>

    <div class="config-lyrics-card">
      <div class="config-lyrics-preview">
        <p>待选歌词</p>
        <n-space vertical>
          <div class="input-box">
            <p>字体大小</p>
            <div class="input-content">
              <n-input-number v-model:value="lyricsNonSize" :min="10"
                @update:value="updateLyricsValue(lyricsNonSize, 'customLyricsNonSizeValue')" />
            </div>
          </div>

          <div class="input-box">
            <p>字体行高</p>
            <div class="input-content">
              <n-input-number v-model:value="lyricsNonLineHeight"
                @update:value="updateLyricsValue(lyricsNonLineHeight, 'customLyricsNonLineHeightValue')" />
            </div>
          </div>

          <div class="input-box">
            <p>字体宽度</p>
            <div class="input-content">
              <n-slider v-model:value="lyricsNonWidth" :step="100" :min="100" :max="900"
                @update:value="updateLyricsValue(lyricsNonWidth, 'customLyricsNonWidthValue')" />
            </div>
          </div>
        </n-space>

      </div>
      <div class="config-lyrics-preview">
        <p>选中歌词</p>
        <n-space vertical>
          <div class="input-box">
            <p>字体大小</p>
            <div class="input-content">
              <n-input-number v-model:value="lyricsSelectSize" :min="10"
                @update:value="updateLyricsValue(lyricsSelectSize, 'customLyricsSelectSizeValue')" />
            </div>
          </div>

          <div class="input-box">
            <p>字体行高</p>
            <div class="input-content">
              <n-input-number v-model:value="lyricsSelectLineHeight"
                @update:value="updateLyricsValue(lyricsSelectLineHeight, 'customLyricsSelectLineHeightValue')" />
            </div>
          </div>

          <div class="input-box">
            <p>字体宽度</p>
            <div class="input-content">
              <n-slider v-model:value="lyricsSelectWidth" :step="100" :min="100" :max="900"
                @update:value="updateLyricsValue(lyricsSelectWidth, 'customLyricsSelectWidthValue')" />
            </div>
          </div>
        </n-space>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NInputNumber, NSpace, NSlider } from "naive-ui"
import { initLS } from "../../js/LocalStorage"
import { insertStyle, removeStyle } from "../../js/StyleInsert"

const lyricsNonSize = ref(initLS('customLyricsNonSizeValue', 14));
const lyricsNonWidth = ref(initLS('customLyricsNonWidthValue', 700));
const lyricsNonLineHeight = ref(initLS('customLyricsNonLineHeightValue', 14));
const lyricsSelectSize = ref(initLS('customLyricsSelectSizeValue', 24));
const lyricsSelectWidth = ref(initLS('customLyricsSelectWidthValue', 900));
const lyricsSelectLineHeight = ref(initLS('customLyricsSelectLineHeightValue', 26));

const setLyricsStyle = (value) => {
  const id = 'custom-lyrics';

  if (value) {
    const style = `:root {
      --lyrics-selected-font-size: ${lyricsSelectSize.value}px;
      --lyrics-selected-font-width: ${lyricsSelectWidth.value};
      --lyrics-selected-line-height: ${lyricsSelectLineHeight.value}px;
      --lyrics-non-select-font-size: ${lyricsNonSize.value}px;
      --lyrics-non-select-font-width: ${lyricsNonWidth.value};
      --lyrics-non-select-line-height: ${lyricsNonLineHeight.value}px;
    }`;
    insertStyle(id, style);
  } else {
    removeStyle(id);
  }
}

const updateLyricsValue = (value, module) => {
  localStorage.setItem(module, value);
  setLyricsStyle(true);
}

onMounted(() => {
  setLyricsStyle(true);
})
</script>

<style lang="less" scoped>
.config-lyrics-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  p {
    width: 100%;
  }

  .config-lyrics-preview {
    width: 260px;
    margin: 0 10px 10px 0;

    .input-box {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      p {
        width: auto;
      }

      .input-content {
        width: 180px;
      }
    }


  }
}
</style>