<template>
  <div class="config-card">
    <h3>设置向导</h3>
    <p>重新执行一次设置向导</p>

    <div class="elaina-btn-group">
      <div class="elaina-btn" @click="targetSetupWizard">
        <a>执行设置向导</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SetupWizardView from '../views/SetupWizardView.vue';

const targetSetupWizard = () => {
  const vDom = document.body.appendChild(document.createElement('div'));
  // vDom.className = 'elaina-setup';
  createApp(h(SetupWizardView)).mount(vDom);
}
</script>