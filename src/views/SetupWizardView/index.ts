import SetupHome from '../../components/SetupWizard/SetupHome.vue';
import CustomColor from '../../components/CustomColor/CustomColor.vue';
import ClientHome from '../../components/ClientConfig/ClientHome.vue';
import BackgroundConfig from '../../components/BackgroundConfig/BackgroundConfig.vue';
import BlurConfig from '../../components/BlurConfig/BlurConfig.vue';
import BocchiOverlay from '../../components/BocchiOverlay/BocchiOverlay.vue';
import LogoConfig from '../../components/LogoConfig/LogoConfig.vue';
import PlayerConfig from '../../components/PlayerConfig/PlayerConfig.vue';
import SetupComplete from '../../components/SetupWizard/SetupComplete.vue';

export const setupViewLists = ref([
  {
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
