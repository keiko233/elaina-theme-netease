<template>
  <ConfigCard class="config-card" @click="click">
    <div class="container" :class="vClass">
      <n-gradient-text :size="36" :gradient="title" class="title">
        {{ context[index] }}
      </n-gradient-text>
    </div>
  </ConfigCard>
</template>

<script setup lang="ts">
import packageJson from '../../package.json';

const title = ref({
  deg: 45,
  from: '#198CFF',
  to: '#47a3ff'
});

const context = ref([
  "Elaina Theme",
  "Version: " + packageJson.version,
  "Author: " + packageJson.author,
  "这是个小彩蛋哦"
]);

const index = ref(0);
const vClass = ref('');

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let lock = false;
const click = async () => {
  if (lock == false) {
    for (let i = 1; i < context.value.length; i++) {
      lock = true;
      vClass.value = 'fade-out';
      await wait(1000);
      index.value++;
      vClass.value = 'fade-in';
      await wait(2000);
      if (i == context.value.length - 1) {
        vClass.value = 'fade-out';
        await wait(1000);
        index.value = 0;
        vClass.value = 'fade-in';
        lock = false;
      }
    };
  }
};
</script>

<style scoped lang="less">
.config-card {
  padding: 0;
  background: linear-gradient(45deg,
      var(--theme-config-card-light) 25%,
      var(--theme-config-card-background) 0,
      var(--theme-config-card-background) 50%,
      var(--theme-config-card-light) 0,
      var(--theme-config-card-light) 75%,
      var(--theme-config-card-background) 0);
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

.fade-out {
  animation: fadeoutAnimation 1s normal 1 forwards;

  @keyframes fadeoutAnimation {
    0% {
      transform: scale(1) rotate(0);
      opacity: 1;
      filter: blur(0);
    }

    100% {
      transform: scale(0.2) rotate(0.01turn);
      opacity: 0;
      filter: blur(12px);
    }
  }
}

.fade-in {
  animation: fadeinAnimation 1s normal 1 forwards;

  @keyframes fadeinAnimation {
    0% {
      transform: scale(0.2) rotate(-0.01turn);
      opacity: 0;
      filter: blur(12px);
    }

    100% {
      transform: scale(1) rotate(0);
      opacity: 1;
      filter: blur(0);
    }
  }
}
</style>