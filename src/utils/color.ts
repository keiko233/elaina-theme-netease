import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
  hexFromArgb,
  Scheme,
} from "@material/material-color-utilities";

export type ColorScheme = ReturnType<Scheme["toJSON"]>;

export type ColorSchemeString = {
  [K in keyof ColorScheme]: ColorScheme[K] extends number
    ? string
    : ColorScheme[K];
};
export const generateTheme = (color: string) => {
  const theme = themeFromSourceColor(argbFromHex(color));

  applyTheme(theme, { target: document.body, dark: false });

  return Object.entries(theme.schemes.light.toJSON()).reduce<{
    [key: string]: string;
  }>((accumulator, [key, value]) => {
    accumulator[key] = hexFromArgb(value);

    return accumulator;
  }, {}) as ColorSchemeString;
};
