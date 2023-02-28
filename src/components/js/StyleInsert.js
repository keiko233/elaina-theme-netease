export function insertStyle(id, style) {
  const originalElement = document.getElementById(id);
  if (originalElement) document.head.removeChild(originalElement);

  const insertStyle = document.createElement('style');
  insertStyle.id = id;
  insertStyle.innerHTML = style;
  document.head.appendChild(insertStyle);
}

export function removeStyle(id) {
  document.head.removeChild(document.getElementById(id));
}