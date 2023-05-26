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