<template>
  <div style="text-align: center;">
    <p style="padding-bottom: 24px;">
      <n-gradient-text :size="36" type="info" style="font-weight: 900;">
        欢迎使用
      </n-gradient-text>
    </p>

    <Header />

    <p style="padding-top: 24px; padding-bottom: 12px;">
      <n-gradient-text :size="24" :gradient="{ deg: 135, from: 'rgb(255 38 55)', to: 'rgb(255 157 157)' }"
        style="font-weight: 700;" v-html="context()" />
    </p>

    <n-tag round :bordered="false">
      当然你也可以右上角跳过
    </n-tag>
  </div>
</template>

<script setup lang="ts">
import Header from '../Header.vue';
import { version } from './';
import packageJson from '../../../package.json';

const context = () => {
  console.log(version.value);
  console.log(packageJson.version);
  if (version.value != packageJson.version.toString() && version.value != null) {
    return `看上去你升级了新版本呢<br>每次升级都会弹出来带你过一遍新功能哦`
  } else {
    return `这是一个设置向导<br>接下来我将带你认识这一个插件`
  }
};
</script>