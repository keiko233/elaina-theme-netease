<template>
  <n-space>
    <n-button @click="click">Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> Warning </n-button>
    <n-button type="error"> Error </n-button>
  </n-space>

  <n-input v-model:value="background" type="text" />

  <n-input-number v-model:value.number="blur.main" />

  <n-color-picker
    :modes="['hex']"
    :show-alpha="false"
    v-model:value="themeColor"
  />
</template>

<script setup lang="tsx">
import { useNCM } from "@/hooks";
import { message } from "@/utils/discreteApi";
import { background, blur, themeColor } from "@/store";

const { switchTheme } = useNCM();

const click = () => {
  message.success("clicked");
  switchTheme();
};

onMounted(() => {
  setTimeout(() => {
    const opensong = document.querySelector(
      "#page_pc_mini_bar > div > div:nth-child(1) > div > div.miniVinylWrapper.vinylImgCls_v1vffxgf"
    ) as HTMLElement;

    opensong.addEventListener("click", () => {
      const closebtn = document.querySelector(
        `#root > div[class^="AppEle"] > section > div[class^="VinylPageContainer"] > div.page-header > div > div.left > div > button`
      ) as HTMLButtonElement;

      const svg = closebtn?.querySelector(`span > span > svg`);

      const footer = document.querySelector(
        `#page_pc_mini_bar > div > div[class^="VinylPageBarWrapper"] > div:nth-child(1) > div`
      );

      const footerFrist = footer?.firstChild as HTMLElement;

      const button = document.createElement("button");
      button.className = footerFrist.className;
      button.textContent = "Test";
      button.addEventListener("click", () => closebtn?.click());

      footer?.insertBefore(button, footerFrist);
    });
  }, 3000);
});
</script>
