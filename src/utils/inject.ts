import { generateTheme } from "./color";
import { insertStyleVar } from "./style";
import { background, blur, themeColor } from "@/store";
import { alpha } from "@wojtekmaj/color-utils";

const injectBackground = () => {
  insertStyleVar("background-url", `url("${background.value}")`);
};

const injectBlur = () => {
  Object.entries(blur.value).forEach(([key, value]) => {
    insertStyleVar(`blur-${key}`, `${value}px`);
  });
};

const injectThemeColor = () => {
  const color = generateTheme(themeColor.value);

  insertStyleVar("primary-alpha", `${alpha(color.primary, 0.15)}`);
};

const injectDefault = () => {
  injectBackground();
  injectBlur();
  injectThemeColor();

  watch(background, () => {
    injectBackground();
  });

  watch(
    blur,
    () => {
      injectBlur();
    },
    { deep: true }
  );

  watch(themeColor, () => {
    injectThemeColor();
  });
};

injectDefault();
