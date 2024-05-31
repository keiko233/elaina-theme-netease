import { selectors } from "@/utils/selectors";

export const getNavBar = () => {
  return document.getElementById("page_pc_main_nav") as HTMLElement;
};

export const getNavBarRightIcons = () => {
  return getNavBar().querySelector('div[class^="IconBar"]') as HTMLElement;
};

export const getMiniModeIconBar = () => {
  return getNavBarRightIcons().querySelector(
    'div[class^="MiniModeIconBar"]'
  ) as HTMLElement;
};

export const getThemeIcon = () => {
  return getMiniModeIconBar().querySelector(
    'span[aria-label="skin"]'
  ) as HTMLElement;
};

export const getTabOffical = async () => {
  return (await betterncm.utils.waitForElement("#tab_official")) as HTMLElement;
};

export const getOfficalThemes = () => {
  const generateClick = async (id: number): Promise<void> => {
    const el = (await getTabOffical()).querySelector(
      selectors(`div.offical-card-grid`, `div:nth-child(${id})`, `div.content`)
    ) as HTMLElement;

    return el.click();
  };

  return {
    white: () => generateClick(1),
    red: () => generateClick(2),
    black: () => generateClick(3),
  };
};

export const getTopArea = () => {
  return document.querySelector("#topArea") as HTMLElement;
};
