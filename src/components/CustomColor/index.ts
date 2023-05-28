import { getLightColor, getDarkColor } from "../../utils/colorMapping";
import { initLS, putLS } from "../../utils/localStorage";
import { insertStyle, insertClassOnBody, checkClassOnBody, removeClassOnBody, removeStyle } from "../../utils/styleInsert";

export const customColorStyleStatus = ref(initLS('elaina-customColorStyleStatus', false));

export const customColor = ref(initLS('elaina-customColor', '#ff1958'));

export const themeVarLists = ref([
  { name: 'theme-primary', style: 'background-color' },
  { name: 'theme-primary-notransparency', style: 'background-color' },
  { name: 'theme-primary-shadow', style: 'box-shadow' },
  { name: 'theme-primary-font-shadow', style: 'text-shadow' },
  { name: 'theme-config-card-background', style: 'background-color' },
  { name: 'theme-config-card-border', style: 'border' }
]);

export const insertCustomColorStyle = (value: string) => {
  const style = `:root {--theme-primary: ${value}A3;
    --theme-primary-notransparency: ${getLightColor(value, 0.2)};
    --theme-primary-shadow: 0 0 3px ${getDarkColor(getLightColor(value, 0.8), 0.2)};
    --theme-primary-font-shadow: 0 0 1px ${getDarkColor(getLightColor(value, 0.1), 0.1)};
    --theme-config-card-background: ${getLightColor(value, 0.8)}9c;
    --theme-config-card-light: ${getLightColor(value, 0.6)}9c;
    --theme-config-card-border: solid 1px ${getLightColor(getDarkColor(value, 0.1), 0.7)};
    --themeC1: ${value};
    --themeC1-header: ${getLightColor(value, 0.2)};
    --themeSearch: rgba(0, 0, 0, 0.15);
    --themeC1-rgb: 237,65,65;
    --themeC1-hvr: ${getLightColor(value, 0.3)};
    --themePlay: ${getLightColor(value, 0.2)};
    --themePlay-hvr: ${getLightColor(value, 0.3)};
    --icnTheme: ${getLightColor(value, 0.1)};
    --icnTheme-hvr: ${getLightColor(value, 0.2)};
    --icnTheme-lighten: ${value};}`;
  insertStyle('custom-color-style', style);
};

export const insertComponentStyle = (color: string) => {
  removeComponentStyle();
  insertCustomColorStyle(color);
  insertClassOnBody('elaina-theme');
  insertClassOnBody('s-theme-white');
  putLS('elaina-customColor', color);
};

export const removeComponentStyle = () => {
  if (checkClassOnBody('elaina-theme')) removeClassOnBody('elaina-theme');
  if (checkClassOnBody('s-theme-white')) removeClassOnBody('s-theme-white');
  removeStyle('custom-color-style');
};
