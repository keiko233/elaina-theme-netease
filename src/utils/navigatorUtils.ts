export const writeClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
}
