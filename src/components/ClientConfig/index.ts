import { ToggleClass, insertClassOnBody, removeClassOnBody } from '../../utils/styleInsert';
import { initLS, putLS } from '../../utils/localStorage';

export const elainaThemeStatus = ref(initLS('elaina-elainaThemeStatus', false));

export const elainaThemeSwitch = (value: boolean) => {
  if (value) insertClassOnBody('client-elaina-theme');
  else removeClassOnBody('client-elaina-theme');
  putLS('elaina-elainaThemeStatus', value);
};

export const elainaTranslucentFillet = new ToggleClass('client-translucent-elaina-theme', 'elaina-elainaTranslucentFilletStatus');
export const elainaThemeFillet = new ToggleClass('client-fillet-elaina-theme', 'elaina-elainaThemeFilletStatus');
export const elainaFontHighContrast = new ToggleClass('client-font-high-contrast', 'elaina-elainaFontHighContrastStatus');
export const elainaBetterPlaylist = new ToggleClass('better-playlist', 'elaina-elainaBetterPlaylistStatus');
export const elainaBetterRecommendList = new ToggleClass('better-recommend-list', 'elaina-elainaBetterRecommendList');
export const elainaWhiteFont = new ToggleClass('white-font', 'elaina-elainaWhiteFont');
export const removeNavVideo = new ToggleClass('client-remove-nav-video', 'elaina-removeNavVideoStatus');
export const removeNavLook = new ToggleClass('client-remove-nav-look', 'elaina-removeNavLookStatus');
export const removeRecmdBanner = new ToggleClass('client-remove-recmd-banner', 'elaina-removeRecmdBannerStatus');
export const removeRecmdPodcast = new ToggleClass('client-remove-recmd-podcast', 'elaina-removeRecmdPodcastStatus');
export const removeRecmdAudioBook = new ToggleClass('client-remove-recmd-audiobook', 'elaina-removeRecmdAudioBook');
export const removeRecmdExcmv = new ToggleClass('client-remove-recmd-excmv', 'elaina-removeRecmdExcmv');
export const removeRecmdNewsong = new ToggleClass('client-remove-recmd-newsong', 'elaina-removeRecmdNewsong');
export const removeRecmdThemepodcast = new ToggleClass('client-remove-recmd-themepodcast', 'elaina-removeRecmdThemepodcast');
export const removeRecmdMvbox = new ToggleClass('client-remove-recmd-mvbox', 'elaina-removeRecmdMvbox');
export const removeRecmdAdjustbar = new ToggleClass('client-remove-recmd-adjustbar', 'elaina-removeRecmdAdjustbar');

export const elementLists = ref([
  {
    title: "启用半透明框架",
    tip: "启用同时也会修复部分场景下网易的背景颜色问题。",
    valueModel: elainaTranslucentFillet.value,
    update: elainaTranslucentFillet.toggle.bind(elainaTranslucentFillet)
  },
  {
    title: "启用内圆角",
    valueModel: elainaThemeFillet.value,
    update: elainaThemeFillet.toggle.bind(elainaThemeFillet)
  },
  {
    title: "文字高对比度",
    tip: "增强部分场景下文字的对比度，防止看不清。",
    valueModel: elainaFontHighContrast.value,
    update: elainaFontHighContrast.toggle.bind(elainaFontHighContrast)
  },
  {
    title: "更好的歌曲列表",
    valueModel: elainaBetterPlaylist.value,
    update: elainaBetterPlaylist.toggle.bind(elainaBetterPlaylist)
  },
  {
    title: "更好的推荐卡片列表",
    tip: "旧版功能移植，重新设计并优化，试试就知道了。",
    valueModel: elainaBetterRecommendList.value,
    update: elainaBetterRecommendList.toggle.bind(elainaBetterRecommendList)
  },
  {
    title: "使用白色字体",
    tip: "更改部分场景为白色字体，并且会加粗字体。",
    valueModel: elainaWhiteFont.value,
    update: elainaWhiteFont.toggle.bind(elainaWhiteFont)
  },
  {
    title: "移除侧边栏视频",
    valueModel: removeNavVideo.value,
    update: removeNavVideo.toggle.bind(removeNavVideo)
  },
  {
    title: "移除侧边栏直播",
    valueModel: removeNavLook.value,
    update: removeNavLook.toggle.bind(removeNavLook)
  },
  {
    title: "移除主页轮播图",
    valueModel: removeRecmdBanner.value,
    update: removeRecmdBanner.toggle.bind(removeRecmdBanner)
  },
  {
    title: "移除主页热门博客",
    valueModel: removeRecmdPodcast.value,
    update: removeRecmdPodcast.toggle.bind(removeRecmdPodcast)
  },
  {
    title: "移除主页听见好书",
    valueModel: removeRecmdAudioBook.value,
    update: removeRecmdAudioBook.toggle.bind(removeRecmdAudioBook)
  },
  {
    title: "移除主页独家放送",
    valueModel: removeRecmdExcmv.value,
    update: removeRecmdExcmv.toggle.bind(removeRecmdExcmv)
  },
  {
    title: "移除主页最新音乐",
    valueModel: removeRecmdNewsong.value,
    update: removeRecmdNewsong.toggle.bind(removeRecmdNewsong)
  },
  {
    title: "移除主页主题博客",
    valueModel: removeRecmdThemepodcast.value,
    update: removeRecmdThemepodcast.toggle.bind(removeRecmdThemepodcast)
  },
  {
    title: "移除主页推荐MV",
    valueModel: removeRecmdMvbox.value,
    update: removeRecmdMvbox.toggle.bind(removeRecmdMvbox)
  },
  {
    title: "移除主页调整栏目顺序",
    valueModel: removeRecmdAdjustbar.value,
    update: removeRecmdAdjustbar.toggle.bind(removeRecmdAdjustbar)
  }
]);