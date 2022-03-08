<template>
  <div>
    <img class="yureru-s" src="../assets/logo.png" />
  </div>
</template>

<style scoped>
.yureru-s {
  animation: yureru-s 2s infinite;
}
@keyframes yureru-s {
  0% {
    transform: translate(2px, 0px);
  }
  5% {
    transform: translate(-2px, 0px);
  }
  10% {
    transform: translate(2px, 0px);
  }
  15% {
    transform: translate(-2px, 0px);
  }
  20% {
    transform: translate(2px, 0px);
  }
  25% {
    transform: translate(-2px, 0px);
  }
  30% {
    transform: translate(0px, 0px);
  }
}
</style>
