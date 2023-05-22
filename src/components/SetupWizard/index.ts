import { initLS, putLS } from '../../utils/localStorage';
import SetupWizardView from '../../views/SetupWizardView.vue';

let setupApp: any = null;
let vElement: any = null;

export const mountSetupWizardView = () => {
  setupApp = createApp(h(SetupWizardView));
  vElement = document.body.appendChild(document.createElement('div'));
  setupApp.mount(vElement);
};

export const unmountSetupWizardView = () => {
  setupApp.unmount();
  document.body.removeChild(vElement);
};

export const version = ref(initLS('elaina-version', null));

export const updateVersion = (version: string) => {
  return putLS('elaina-version', version)
}