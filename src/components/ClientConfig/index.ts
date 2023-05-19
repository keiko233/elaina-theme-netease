import { insertClassOnBody, removeClassOnBody } from '../../utils/styleInsert';
import { initLS, putLS } from '../../utils/localStorage';

export const elainaThemeStatus = ref(initLS('elaina-elainaThemeStatus', false));

export const elainaThemeSwitch = (value: boolean) => {
  if (value) insertClassOnBody('client-elaina-theme');
  else removeClassOnBody('client-elaina-theme');
  putLS('elaina-elainaThemeStatus', value);
};

export const elainaTranslucentFilletStatus = ref(initLS('elaina-elainaTranslucentFilletStatus', false));

export const elainaTranslucentFilletSwitch = (value: boolean) => {
  if (value) insertClassOnBody('client-translucent-elaina-theme');
  else removeClassOnBody('client-translucent-elaina-theme');
  putLS('elaina-elainaTranslucentFilletStatus', value);
};

export const elainaThemeFilletStatus = ref(initLS('elaina-elainaThemeFilletStatus', false));

export const elainaThemeFilletSwitch = (value: boolean) => {
  if (value) insertClassOnBody('client-fillet-elaina-theme');
  else removeClassOnBody('client-fillet-elaina-theme');
  putLS('elaina-elainaThemeFilletStatus', value);
};

export const removeNavVideoStatus = ref(initLS('elaina-removeNavVideoStatus', false));

export const removeNavVideoSwitch = (value: boolean) => {
  if (value) insertClassOnBody('client-remove-nav-video');
  else removeClassOnBody('client-remove-nav-video');
  putLS('elaina-removeNavVideoStatus', value);
};

export const removeNavLookStatus = ref(initLS('elaina-removeNavLookStatus', false));

export const removeNavLookSwitch = (value: boolean) => {
  if (value) insertClassOnBody('client-remove-nav-look');
  else removeClassOnBody('client-remove-nav-look');
  putLS('elaina-removeNavLookStatus', value);
};