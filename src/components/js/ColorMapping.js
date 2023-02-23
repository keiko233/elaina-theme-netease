const hex2rgb = (value) => {
  value = value.replace('#', '');
  const rgb = value.match(/../g);
  for (let i = 0; i < 3; i++) rgb[i] = parseInt(rgb[i], 16);
  return rgb;
}

const rgb2hex = (r, g, b) => {
  const rgb = [r.toString(16), g.toString(16), b.toString(16)];
  for (let i = 0; i < 3; i++) if (rgb[i].length == 1) rgb[i] = '0' + rgb[i];
  return '#' + rgb.join('');
}

export function getDarkColor (color, value) {
  const rgb = hex2rgb(color);
  for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - value));
  return rgb2hex(rgb[0], rgb[1], rgb[2]);
}

export function getLightColor(color, value) {
  const rgb = hex2rgb(color);
  for (let i = 0; i < 3; i++) rgb[i] = Math.floor((255 - rgb[i]) * value + rgb[i]);
  return rgb2hex(rgb[0], rgb[1], rgb[2]);
}
