export function initLS (variablName, defaultValue) {
  if (!localStorage.getItem(variablName)) {
    localStorage.setItem(variablName, JSON.stringify(defaultValue));
    return defaultValue;
  } else {
    return JSON.parse(localStorage.getItem(variablName));
  }
}