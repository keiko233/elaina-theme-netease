function isNCMClient() {
  if (/NeteaseMusicDesktop/i.test(navigator.userAgent)) {
    console.log("NeteaseMusicDesktop, return true.");
    return true;
  } else {
    console.log("Not NeteaseMusicDesktop, return false.");
    return false;
  };
}

export default isNCMClient;