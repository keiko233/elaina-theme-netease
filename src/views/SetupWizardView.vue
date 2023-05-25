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
import SetupRender from '../components/SetupWizard/SetupRender.vue';
import SetupHome from '../components/SetupWizard/SetupHome.vue';
import CustomColor from '../components/CustomColor/CustomColor.vue';
import ClientHome from '../components/ClientConfig/ClientHome.vue';
import BackgroundConfig from '../components/BackgroundConfig/BackgroundConfig.vue';
import BlurConfig from '../components/BlurConfig.vue';
import BocchiOverlay from '../components/BocchiOverlay.vue';
import LogoConfig from '../components/LogoConfig.vue';
import PlayerConfig from '../components/PlayerConfig/PlayerConfig.vue';
import SetupComplete from '../components/SetupWizard/SetupComplete.vue';
import { unmountSetupWizardView, updateVersion, version } from '../components/SetupWizard/index';
import packageJson from '../../package.json';

const setupAnimation = ref('translate-animation-in');

const componentAnimation = ref('translate-animation-gradient-in');

const closeSetup = () => {
  version.value = packageJson.version;
  updateVersion(packageJson.version);
  setupAnimation.value = "translate-animation-out";
  setTimeout(() => unmountSetupWizardView(), 500);
};

const setupViewLists = ref([
  {
    title: "欢迎使用<br>Elaina Theme",
    component: SetupHome
  },
  {
    title: "首先设置 <br> 自定义主题色",
    component: CustomColor
  },
  {
    title: "设置 <br> 客户端首页样式",
    component: ClientHome
  },
  {
    title: "设置 <br> 自定义背景",
    component: BackgroundConfig
  },
  {
    title: "设置 <br> 毛玻璃效果配置",
    component: BlurConfig
  },
  {
    title: "设置 <br> 波奇酱小挂件",
    component: BocchiOverlay
  },
  {
    title: "设置 <br> 自定义Logo",
    component: LogoConfig
  },
  {
    title: "设置 <br> 主题播放器",
    component: PlayerConfig
  },
  {
    component: SetupComplete
  }
]);

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