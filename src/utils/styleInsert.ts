import { isNCMClient } from "./clientCheck";
import { initLS, putLS } from "./localStorage";

export function insertStyle(id: string, style: string) {
  removeStyle(id);
  const waitInsertStyle = document.createElement('style');
  waitInsertStyle.id = id;
  waitInsertStyle.innerHTML = style;
  document.head.appendChild(waitInsertStyle);
};

export function removeStyle(id: string) {
  // @ts-ignore
  const originalElement = document.getElementById(id);
  if (originalElement) document.head.removeChild(originalElement);
};

const ncmApp = document.getElementById('music-163-com');

export function insertClassOnBody(styleClass: string) {
  // @ts-ignore
  if (isNCMClient()) ncmApp.classList.add(styleClass);
  else console.log('Unknown client.');
};

export function removeClassOnBody(styleClass: string) {
  // @ts-ignore
  if (isNCMClient()) ncmApp.classList.remove(styleClass);
  else console.log('Unknown client.');
};

export function checkClassOnBody(styleClass: string) {
  // @ts-ignore
  if (isNCMClient()) return ncmApp.classList.contains(styleClass);
  else console.log('Unknown client.');
}

export class ToggleClass {
  private status: Ref<boolean>;
  private className: string;
  private lsKey: string;

  constructor(className: string, lsKey: string, initialValue = false) {
    this.status = ref(initLS(lsKey, initialValue));
    this.className = className;
    this.lsKey = lsKey;
  }

  private toggleClassOnBody(value: boolean) {
    if (value) {
      insertClassOnBody(this.className);
    } else {
      removeClassOnBody(this.className);
    }
    putLS(this.lsKey, value);
  }

  public toggle(value: boolean) {
    this.status.value = value;
    this.toggleClassOnBody(value);
  }

  public get value() {
    return this.status.value;
  }
};