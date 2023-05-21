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
export const removeNavVideo = new ToggleClass('client-remove-nav-video', 'elaina-removeNavVideoStatus');
export const removeNavLook = new ToggleClass('client-remove-nav-look', 'elaina-removeNavLookStatus');
export const removeRecmdBanner = new ToggleClass('client-remove-recmd-banner', 'elaina-removeRecmdBannerStatus');
export const removeRecmdPodcast = new ToggleClass('client-remove-recmd-podcast', 'elaina-removeRecmdPodcastStatus');