<template>
  <n-space vertical>
    <Header />
    <SetupWizard />
    <Footer />
  </n-space>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import SetupWizard from '../components/SetupWizard.vue';
import Footer from '../components/Footer.vue';
</script>