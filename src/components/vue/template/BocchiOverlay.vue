<template>
  <div class="config-card">
    <h3>整只波奇酱</h3>
    <p>给朋友做的彩蛋功能，没啥用，纯粹好玩。</p>
    <n-switch v-model:value="bocchiOverlayStatus" @update:value="bocchiOverlaySwitch" size="large">
      <template #checked>
        召唤波奇
      </template>
      <template #unchecked>
        影藏波奇
      </template>
    </n-switch>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NSwitch } from 'naive-ui'
import isNCMClient from "../../js/ClientCheck.js"

const setBocchiOverlay = (value) => {
  const header = document.getElementById('music-163-com');

  if (value) {
    header.classList.add('bocchi-overlay');
  } else {
    header.classList.remove('bocchi-overlay');
  }
}

if (!localStorage.getItem('enableBocchiOverlay')) {
  localStorage.setItem('enableBocchiOverlay', 'false')
}

const bocchiOverlayStatus = ref(JSON.parse(localStorage.getItem('enableBocchiOverlay')));

const bocchiOverlaySwitch = (value) => {
  localStorage.setItem('enableBocchiOverlay', value);
  setBocchiOverlay(value);
}

onMounted(() => {
  if (bocchiOverlayStatus.value == true && isNCMClient()) {
    setBocchiOverlay(true);
  }
})
</script>