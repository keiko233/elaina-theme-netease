<template>
  <n-space vertical>
    <Header />
    <CustomColor />
    <ClientHome />
    <BackgroundConfig />
    <BlurConfig />
    <LogoConfig />
    <PlayerConfig />
    <SetupWizard />
    <Footer />
  </n-space>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import CustomColor from '../components/CustomColor/CustomColor.vue';
import ClientHome from '../components/ClientHome.vue';
import BackgroundConfig from '../components/BackgroundConfig.vue';
import BlurConfig from '../components/BlurConfig.vue';
import LogoConfig from '../components/LogoConfig.vue';
import PlayerConfig from '../components/PlayerConfig/PlayerConfig.vue';
import SetupWizard from '../components/SetupWizard/Setting.vue';
import Footer from '../components/Footer.vue';
</script>