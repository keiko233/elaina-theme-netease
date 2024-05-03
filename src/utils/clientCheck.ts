export function isNCMClient() {
  if (/NeteaseMusicDesktop/i.test(navigator.userAgent)) return true;
  else return false;
}
