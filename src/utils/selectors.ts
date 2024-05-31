export const selectors = (...args: any[]) => {
  return args.filter(Boolean).join(" > ");
};
