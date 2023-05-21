<template>
  <ConfigCard title="客户端首页样式" illustrate="全局修改网易云客户端样式，开启后有少量微调选项。">

    <n-tooltip trigger="hover" :disabled="customColorStyleStatus">
      <template #trigger>
        <n-switch v-model:value="elainaThemeStatus" @update:value="elainaThemeSwitch" size="large"
          :disabled="!customColorStyleStatus">
          <template #checked>
            注入主题样式
          </template>
          <template #unchecked>
            保持网易默认
          </template>
        </n-switch>
      </template>
      启用需要先开启自定义主题色，不然颜色无法正常显示
    </n-tooltip>

    <n-grid :x-gap="12" :y-gap="8" cols="2 900:3 1200:4" style="margin-top: 12px;" v-if="elainaThemeStatus">

      <n-grid-item v-for="elementList in elementLists">
        <n-tooltip trigger="hover" :disabled="!elementList.tip">
          <template #trigger>
            <Chip :title="elementList.title">
              <n-switch v-model:value="elementList.valueModel" @update:value="elementList.update" />
            </Chip>
          </template>
          {{ elementList.tip }}
        </n-tooltip>
      </n-grid-item>

    </n-grid>

  </ConfigCard>
</template>

<script setup lang="ts">
import {
  elainaThemeStatus,
  elainaThemeSwitch,
  elainaThemeFillet,
  elainaTranslucentFillet,
  elainaFontHighContrast,
  elainaBetterPlaylist,
  removeNavVideo,
  removeNavLook,
  removeRecmdBanner,
  removeRecmdPodcast,
  removeRecmdAudioBook,
  removeRecmdExcmv,
  removeRecmdNewsong,
  removeRecmdThemepodcast,
  removeRecmdMvbox,
  removeRecmdAdjustbar
} from '.';
import ConfigCard from './../ConfigCard.vue';
import { customColorStyleStatus } from './../CustomColor';

const elementLists = ref([
{
    title: "启用半透明框架",
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

onMounted(() => {
  if (elainaThemeStatus.value) elainaThemeSwitch(true);
  for (let i = 0; i < elementLists.value.length; i++) {
    if (elementLists.value[i].valueModel) elementLists.value[i].update(true);
  }
});
</script>