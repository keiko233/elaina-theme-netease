<template>
  <div class="setup" :class="translateAnimationOut">
    <div class="center">
      <div class="container">
        <SetupHome />

        <div class="elaina-btn" @click="nextStep">
          <a>下一步</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SetupHome from '../components/SetupWizard/SetupHome.vue';
import { unmountSetupWizardView } from '../components/SetupWizard/index';

const translateAnimationOut = ref('translate-animation-in');

const nextStep = () => {
  translateAnimationOut.value = "translate-animation-out";
  setTimeout(() => unmountSetupWizardView(), 500);
}

</script>

<style scoped lang="less">
.setup {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  background-color: #e8f6ff;

  .center {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .container {
      height: 480px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .elaina-btn a {
        padding: 16px 36px;
        font-size: 18px;
        border-radius: 36px;
      }
    }
  }
}
</style>