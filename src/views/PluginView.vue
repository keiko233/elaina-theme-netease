<template>
  <n-space vertical>
    <Header />
    <Notice />
    <CustomColor />
    <ClientHome />
    <BackgroundConfig />
    <BlurConfig />
    <BocchiOverlay />
    <LogoConfig />
    <PlayerConfig />
    <SetupWizard />
    <Footer />
  </n-space>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Notice from '../components/Notice.vue';
import CustomColor from '../components/CustomColor/CustomColor.vue';
import ClientHome from '../components/ClientConfig/ClientHome.vue';
import BackgroundConfig from '../components/BackgroundConfig/BackgroundConfig.vue';
import BlurConfig from '../components/BlurConfig/BlurConfig.vue';
import BocchiOverlay from '../components/BocchiOverlay/BocchiOverlay.vue';
import LogoConfig from '../components/LogoConfig/LogoConfig.vue';
import PlayerConfig from '../components/PlayerConfig/PlayerConfig.vue';
import SetupWizard from '../components/SetupWizard/Setting.vue';
import Footer from '../components/Footer.vue';
</script>