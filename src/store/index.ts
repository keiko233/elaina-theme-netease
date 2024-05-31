import { useStorage } from "@vueuse/core";

export const background = useStorage("elaina.background", "");

export const blur = useStorage("elaina.blur", {
  main: 16,
});

export const themeColor = useStorage("elaina.themeColor", "#009EC9");
