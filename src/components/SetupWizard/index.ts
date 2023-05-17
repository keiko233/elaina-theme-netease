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