<template>
  <div class="setup">
    <div class="center">
      <n-gradient-text :size="28" type="info">
        欢迎使用 Elaina Theme
      </n-gradient-text>
      <P>这是一个设置向导，接下来我将带你认识这一个插件</P>
    </div>
  </div>
</template>

<style scoped lang="less">
.setup {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  background-color: #e8f6ff;
  animation: translateYanimation 0.5s normal 1 forwards;

  @keyframes translateYanimation {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  .center {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>