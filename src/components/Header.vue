<template>
  <ConfigCard class="config-card">
    <div class="container">
      <n-gradient-text :size="36" :gradient="title" class="title">
        Elaina Theme
      </n-gradient-text>
    </div>
  </ConfigCard>
</template>

<script setup lang="ts">
const title = ref({
  deg: 45,
  from: '#FF487A',
  to: '#FF8FBA'
});
</script>

<style scoped lang="less">
.config-card {
  padding: 0;
  background: linear-gradient(45deg,
      #ffdee7ac 25%,
      #ffeef4e1 0,
      #ffeef4e1 50%,
      #ffdee7ac 0,
      #ffdee7ac 75%,
      #ffeef4e1 0);
  background-size: 48px 48px;
  animation: backgroundAnimation 0.8s infinite linear;

  @keyframes backgroundAnimation {
    0% {
      background-position: 0;
    }

    100% {
      background-position: 48px;
    }
  }
}

.container {
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    animation: titleAnimation 10s infinite;

    @keyframes titleAnimation {
      0% {
        transform: scale(1) rotate(0);
      }

      25% {
        transform: scale(0.925) rotate(0.005turn);
      }

      50% {
        transform: scale(0.95) rotate(0);
      }

      75% {
        transform: scale(0.975) rotate(-0.005turn);
      }
    }
  }
}
</style>