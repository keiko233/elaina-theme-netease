import { isNCMClient } from "./clientCheck";

export const openUrl = (url: string) => {
  // @ts-ignore
  if (isNCMClient()) betterncm.ncm.openUrl(url);
  else window.open(url, '_blank');
};