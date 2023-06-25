import { initLS, putLS } from "../../utils/localStorage";
import { insertStyle, removeStyle } from "../../utils/styleInsert";

export const elementLists = ref([
  { 
    name: '主页背景', 
    value: initLS('elaina-blurHomeValue', 0), 
    lsKey: 'elaina-blurHomeValue', 
    style: '--theme-blur-home' 
  },
  { 
    name: '主页边框', 
    value: initLS('elaina-blurHomeFrameValue', 4), 
    lsKey: 'elaina-blurHomeFrameValue', 
    style: '--theme-blur-home-frame' 
  },
  { 
    name: '播放页', 
    value: initLS('elaina-blurPlayValue', 8), 
    lsKey: 'elaina-blurPlayValue', 
    style: '--theme-blur-play' 
  },
  { 
    name: '播放页底栏', 
    value: initLS('elaina-blurPlayDockValue', 32), 
    lsKey: 'elaina-blurPlayDockValue', 
    style: '--theme-blur-play-dock' 
  },
  { 
    name: '设置卡片', 
    value: initLS('elaina-blurConfigCardValue', 8), 
    lsKey: 'elaina-blurConfigCardValue', 
    style: '--theme-blur-config-card' 
  }
]);

export const insertCustomBlurStyle = () => {
  const render = (name: string, value: number) => {
    if (value != 0) return `${name}:blur(${value}px);`
    else return '';
  };

  let style: string = ':root{';
  for (let i = 0; i < elementLists.value.length; i++) {
    style += render(elementLists.value[i].style, elementLists.value[i].value);
  }
  style += '};'

  insertStyle('custom-blur', style);
};

export const removeCustomBlurStyle = () => {
  removeStyle('custom-blur');
};

export const updateCustomBlur = (lsKey: string, value: number) => {
  putLS(lsKey, value);
  insertCustomBlurStyle();
};
