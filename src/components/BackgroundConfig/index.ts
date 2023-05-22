import { getImageData } from "../../utils/imageUtils";
import { initLS, putLS } from "../../utils/localStorage";
import { insertStyle, insertClassOnBody, removeStyle, removeClassOnBody } from "../../utils/styleInsert";

export const backgroundStatus = ref(initLS('elaina-backgroundStatus', false));
export const customBackgroundImageData = ref(initLS('elaina-customBackgroundImageData', null));

export const insertBackground = (data: string) => {
  removeBackground();
  const background = `:root{--background-image: url('${data}');}`;
  insertStyle('custom-background', background);
  insertClassOnBody('background-elaina-theme');
};

export const removeBackground = () => {
  removeStyle('custom-background');
  removeClassOnBody('background-elaina-theme');
};

export const updateCustomBackgronud = (id: string) => {
  getImageData(id, (result) => {
    putLS('elaina-customBackgroundImageData', result);
    customBackgroundImageData.value = result;
    insertBackground(customBackgroundImageData.value);
  });
};