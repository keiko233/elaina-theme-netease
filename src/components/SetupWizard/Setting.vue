<template>
  <div class="config-card">
    <h3>设置向导</h3>
    <p>重新执行一次设置向导</p>

    <div class="elaina-btn-group">
      <div class="elaina-btn" @click="mountSetupWizardView">
        <a>执行设置向导</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mountSetupWizardView } from './index'
</script>