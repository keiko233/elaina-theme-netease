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
  .webp {
    background: #ffffff !important;
  }
  .m-nav .newlist::before, .m-nav .newlist::after {
    background-color: #ffffff;
  }
  input.j-flag::placeholder {
    color: #ffffff !important;
  }
  .m-plylist .itm:before {
    color: #ffffff !important;
  }
  .bg.j-flag.z-show {
    background: #0000003b !important;
  }
  div.u-arrlay.m-userlist {
    background-color: #000;
  }
  div.u-arrlay.u-arrlay-msg.withNewSongTip {
    background-color: #000000b5;
    border-radius: 10px 0 0 10px;
  }
  div.u-arrlay.m-schlist.j-flag.j-search-body.z-hashistory.m-schsug {
    background-color: #000000b5;
  }
  .u-playinglocation svg {
    fill: #000 !important;
  }
  
  div.p-recmd.g-recmd.g-wrap5.q-lrc.j-flag .m-banner {
    display: none;
  }

  div.p-recmd.g-recmd.g-wrap5.q-lrc.j-flag ul.m-list.m-list-recmd.m-list-recmd-live.m-list-flow.f-flex.f-oh {
    display: none;
  }

  div.g-singlec .recommend.j-flag {
    display: none;
  }

  .g-bd2.j-flag.f-cb {
    display: none;
  }

  section.g-single {
    background-image: url(http://pic.majokeiko.com);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #ffffffad;
  }

  .g-single-bd {
    height: 100%;
  }
  .g-singlec-comment.j-flag {
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