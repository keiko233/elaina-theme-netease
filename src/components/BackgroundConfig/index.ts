import { getImageData } from "../../utils/imageUtils";
import { getLS, initLS, putLS } from "../../utils/localStorage";
import { insertStyle, insertClassOnBody, removeStyle, removeClassOnBody } from "../../utils/styleInsert";

export const backgroundStatus = ref(initLS('elaina-backgroundStatus', false));
export const customBackgroundImageData = ref(initLS('elaina-customBackgroundImageData', null));
export const backgroundUrl = ref(initLS('elaina-backgroundUrl', null));
export const staticBackgroundUrl = ref(initLS('elaina-staticBackgroundUrl', false));

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

export const positionOverlay = (value: number) => {
  putLS('elaina-backgroundPositionY', value);
  const id = 'background-position-overlay';
  removeStyle(id);
  insertStyle(id, `:root{--background-position: center ${value}%;}`);
};

export const saveBackgroundUrl = (value: string) => {
  putLS('elaina-backgroundUrl', value);
}

export const getBackgroundUrl = () => {
  return getLS('elaina-backgroundUrl');
}

export const toggleStaticBackgroundUrl = (value?: boolean) => {
  if (value == false) {
    staticBackgroundUrl.value = false;
    putLS('elaina-staticBackgroundUrl', false);
  } else {
    staticBackgroundUrl.value = !staticBackgroundUrl.value;
    putLS('elaina-staticBackgroundUrl', staticBackgroundUrl.value);
  }
};

export const pathOptions = ref([]);

export const pathOptionsSelectValue = ref(initLS('elaina-pathOptionsSelectValue', 'elaina'));
