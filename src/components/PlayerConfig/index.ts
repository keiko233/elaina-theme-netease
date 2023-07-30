import { isNCMClient } from "../../utils/clientCheck";
import { initLS, putLS } from "../../utils/localStorage";
import { insertClassOnBody, insertStyle, removeClassOnBody, removeStyle } from "../../utils/styleInsert";
import { waitForElement } from "../../utils/waitForElement";

export const elainaPlayerStatus = ref(initLS('elaina-elainaPlayerStatus', false));
export const songNameOnTopStatus = ref(initLS('elaina-songNameOnTopStatus', false));
export const songInfoOnPlayerStatus = ref(initLS('elaina-songInfoOnPlayerStatus', false));
export const elainaProgressBarStatus = ref(initLS('elaina-elainaProgressBarStatus', false));

export const nonSelectFontSize = ref(initLS('elaina-nonSelectFontSize', 14));
export const nonSelectFontWidth = ref(initLS('elaina-nonSelectFontWidth', 700));
export const nonSelectLineHeight = ref(initLS('elaina-nonSelectLineHeight', 14));
export const selectFontSize = ref(initLS('elaina-selectFontSize', 24));
export const selectFontWidth = ref(initLS('elaina-selectFontWidth', 900));
export const selectLineHeight = ref(initLS('elaina-selectLineHeight', 26));

export const songNameOnTopSwitch = (value: boolean) => {
  putLS('elaina-songNameOnTopStatus', value);
  if (value) insertClassOnBody('song-name-on-top');
  else removeClassOnBody('song-name-on-top');
};

export const songInfoOnPlayerSwitch = (value: boolean) => {
  putLS('elaina-songInfoOnPlayerStatus', value);
  if (value && isNCMClient()) {
    insertClassOnBody('song-info-elaina-theme');
    waitForElement("#music-163-com > section", () => {
      // @ts-ignore
      const createSongInfo = document.querySelector('.cd.j-flag').appendChild(document.createElement('div'));
      createSongInfo.className = 'elaina-song-info';
      // @ts-ignore
      createSongInfo.appendChild(document.querySelector('.head.j-fflag'));
    });
  }
  else if (isNCMClient()) {
    removeClassOnBody('song-info-elaina-theme');
    // @ts-ignore
    betterncm_native.app.reloadIgnoreCache();
  }
};

export const insertPlayerConfigStyle = () => {
  const style = `:root{
    --lyrics-selected-font-size: ${selectFontSize.value}px;
    --lyrics-selected-font-width: ${selectFontWidth.value};
    --lyrics-selected-line-height: ${selectLineHeight.value}px;
    --lyrics-non-select-font-size: ${nonSelectFontSize.value}px;
    --lyrics-non-select-font-width: ${nonSelectFontWidth.value};
    --lyrics-non-select-line-height: ${nonSelectLineHeight.value}px;
  };`;
  insertStyle('player-config', style);
};

export const removePlayerConfigStyle = () => {
  removeStyle('player-config');
};

export const elainaPlayerSwitch = (value: boolean) => {
  putLS('elaina-elainaPlayerStatus', value);
  if (value) {
    insertClassOnBody('player-elaina-theme');
    insertPlayerConfigStyle();
  }
  else {
    removeClassOnBody('player-elaina-theme');
    removePlayerConfigStyle();
    songNameOnTopSwitch(false);
    songInfoOnPlayerSwitch(false);
    elainaProgressBarSwitch(false);
  }
};

export const elainaProgressBarSwitch = (value: boolean) => {
  putLS('elaina-elainaProgressBarStatus', value);
  if (value) insertClassOnBody('elaina-progress-bar');
  else removeClassOnBody('elaina-progress-bar');
};

export const updateValue = () => {
  putLS('elaina-nonSelectFontSize', nonSelectFontSize.value);
  putLS('elaina-nonSelectFontWidth', nonSelectFontWidth.value);
  putLS('elaina-nonSelectLineHeight', nonSelectLineHeight.value);
  putLS('elaina-selectFontSize', selectFontSize.value);
  putLS('elaina-selectFontWidth', selectFontWidth.value);
  putLS('elaina-selectLineHeight', selectLineHeight.value);
  removePlayerConfigStyle();
  insertPlayerConfigStyle();
};