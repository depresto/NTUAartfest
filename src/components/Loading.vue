<template>
  <div class="loading-screen">
    <div>
      <img src="/loading-logo.png" alt="Loading...">
    </div>
  </div>
</template>

<style scoped lang="scss">
  @keyframes spin { 100% { transform:rotate(360deg); } }

  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    background: #000000;
    z-index: 10000;
    div {
      width: 100px;
      height: 100px;

      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -50px;
      margin-left: -50px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        animation:spin 1s linear infinite;
        width: 100%;
      }
    }
  }
</style>