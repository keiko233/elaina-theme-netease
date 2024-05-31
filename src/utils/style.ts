export const insertStyle = (id: string, style: string) => {
  removeStyle(id);

  const el = document.createElement("style");
  el.id = id;
  el.innerHTML = style;

  document.head.appendChild(el);
};

export const removeStyle = (id: string) => {
  const el = document.getElementById(id);

  if (el) {
    document.head.removeChild(el);
  }
};

export const insertStyleVar = (key: string, value: string | number) => {
  insertStyle(key, `:root{--${key}: ${value};}`);
};
