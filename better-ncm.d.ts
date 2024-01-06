import "betterncm-ts-framework/index";

/* prettier-ignore */
// @ts-nocheck
export {}
declare global {
  var betterncm: typeof import("betterncm-api/index");
  var dom: typeof import("betterncm-api/utils").utils.dom;
  var betterncm_native: any;
  var plugin: import("plugin").NCMInjectPlugin;
}
