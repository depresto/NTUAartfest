<template>
  <img class="logo" src="@/assets/logo-white.png" alt="" v-if="is_white">
  <img class="logo" src="@/assets/logo.png" alt="" v-else>
</template>

<script>
export default {
  name: 'Logo',
  props: ["is_white"]
}
</script>

<style lang="scss">
  .logo {
    width: 100px;
  }
</style>