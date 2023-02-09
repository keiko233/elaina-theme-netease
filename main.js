plugin.onLoad(async () => {
  const css = `
  * {
    color: #ffffff !important;
    font-weight: 700;
    text-shadow: 0 0 1px rgb(0 0 0 / 50%);
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  html {
    background-image: url(http://pic.majokeiko.com);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #ffffff14;
  }
  body#music-163-com {
    backdrop-filter: blur(5px);
    background-color: #0000003b;
  }
  header.g-hd.s-theme-bgc1 {
    background-color: #00000000;
  }
  .m-tabwrap {
    background-color: #00000000;
  }
  section.g-setHd.j-flag.n-set {
    background-color: #00000000;
  }
  section.g-mn.g-mn-set.j-flag {
    background-color: #00000000;
  }
  div#main-player {
    background-color: #00000000;
  }
  svg {
    fill: #ffffff !important;
  }
  .m-nav .newlist::before, .m-nav .newlist::after {
    background-color: #ffffff;
  }
  
  div.p-recmd.g-recmd.g-wrap5.q-lrc.j-flag .m-banner {
    display: none;
  }

  div.p-recmd.g-recmd.g-wrap5.q-lrc.j-flag ul.m-list.m-list-recmd.m-list-recmd-live.m-list-flow.f-flex.f-oh {
    display: none;
  }

  a.u-headtit.f-ff2.f-fwb.f-cb.z-osx-appstore-hide {
    display: none;
  }

  li#n-side-look {
    display: none;
  }
  .m-myradio.j-recommend-content {
    display: none;
  }
  `;
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
});