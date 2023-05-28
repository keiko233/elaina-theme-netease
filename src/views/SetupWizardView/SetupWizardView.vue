<template>
  <div class="setup" :class="setupAnimation">
    <div class="center-container" :class="componentAnimation">
      <div style="width: 90%;padding-bottom: 12px;">
        <div class="elaina-btn" style="float: right;" @click="closeSetup">
          <a>跳过</a>
        </div>
      </div>

      <div class="container">
        <SetupRender :title="setupViewLists[step].title">
          <component :is="setupViewLists[step].component" />
        </SetupRender>

        <div class="elaina-btn" @click="nextStep">
          <a>下一步</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SetupRender from '../../components/SetupWizard/SetupRender.vue';
import { unmountSetupWizardView, updateVersion, version } from '../../components/SetupWizard/index';
import packageJson from '../../../package.json';
import { setupViewLists } from '.';

const setupAnimation = ref('translate-animation-in');

const componentAnimation = ref('translate-animation-gradient-in');

const closeSetup = () => {
  version.value = packageJson.version;
  updateVersion(packageJson.version);
  setupAnimation.value = "translate-animation-out";
  setTimeout(() => unmountSetupWizardView(), 500);
};

const step = ref(0);

const nextStep = () => {
  componentAnimation.value = 'translate-animation-gradient-out';
  setTimeout(() => {
    componentAnimation.value = 'translate-animation-gradient-in'
    if (step.value >= setupViewLists.value.length - 1) closeSetup();
    else step.value++;
  }, 1200);
};
</script>

<style scoped lang="less">
.setup {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1999;
  height: 100vh;
  width: 100%;
  background-color: #e8f6ff;

  .center-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .container {
      height: 480px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .elaina-btn {
        padding-top: 24px;

        a {
          padding: 16px 36px;
          font-size: 18px;
          border-radius: 36px;
        }
      }
    }
  }
}
</style>