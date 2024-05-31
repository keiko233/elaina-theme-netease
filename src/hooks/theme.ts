import { background } from "@/store";
import { getOfficalThemes, getThemeIcon, getTopArea } from "./modules/event";

export type SwitchThemeProps = "white" | "black";

export const switchTheme = async (theme?: SwitchThemeProps) => {
  getThemeIcon().click();

  const { black, white } = getOfficalThemes();

  switch (theme) {
    case "black":
      await black();
      break;

    default:
    case "white":
      await white();
      break;
  }

  getTopArea().click();
};

export const useBackground = {
  get: () => background.value,

  set: (url: string) => {
    background.value = url;
  },
};
