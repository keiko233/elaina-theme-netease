<template>
  <n-space vertical>
    <Header />
    <CustomColor />
    <SetupWizard />
    <Footer />
  </n-space>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import CustomColor from '../components/CustomColor.vue';
import SetupWizard from '../components/SetupWizard/Setting.vue';
import Footer from '../components/Footer.vue';
</script>