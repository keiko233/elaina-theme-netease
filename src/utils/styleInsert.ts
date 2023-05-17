import { isNCMClient } from "./clientCheck";

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