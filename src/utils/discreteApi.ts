import { createDiscreteApi } from "naive-ui";

export const { message, notification, dialog, loadingBar, modal } =
  createDiscreteApi([
    "message",
    "dialog",
    "notification",
    "loadingBar",
    "modal",
  ]);
