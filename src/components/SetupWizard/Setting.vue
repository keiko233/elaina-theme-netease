<template>
  <ConfigCard title="设置向导" illustrate="重新执行一次设置向导">
    <div class="elaina-btn-group">
      <div class="elaina-btn" @click="mountSetupWizardView">
        <a>执行设置向导</a>
      </div>
    </div>
  </ConfigCard>
</template>

<script setup lang="ts">
import { mountSetupWizardView } from './index';
</script>