<template>
  <div class="tabs">
    <router-link  :class="{ active: $route.params.category == undefined }"
                  :to="{ name: 'news' }">最新消息</router-link>
    <router-link  :class="{ active: $route.params.category == 'events' }"
                  :to="{ name: 'news', params: { category: 'events' } }">活動專文</router-link>
    <router-link  :class="{ active: $route.params.category == 'interviews' }"
                  :to="{ name: 'news', params: { category: 'interviews' } }">訪談</router-link>
    <router-link  :class="{ active: $route.params.category == 'media' }"
                  :to="{ name: 'news', params: { category: 'media' } }">媒體報導</router-link>
  </div>
</template>

<style scoped lang="scss">
  .tabs a {
    z-index: 100;
  }
</style>