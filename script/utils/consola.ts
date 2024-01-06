import { createConsola } from "consola";

export const consola = createConsola({
  level: 5,
  fancy: true,
  formatOptions: {
    colors: true,
    compact: false,
    date: true,
  },
});

consola.wrapAll();
