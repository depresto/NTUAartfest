<template>
  <div class="tabs">
    <router-link  :class="{ active: $route.params.category == undefined }"
                  :to="{ name: 'events' }">時程表</router-link>
    <router-link  :class="{ active: $route.params.category == 'programs' }"
                  :to="{ name: 'events', params: { category: 'programs' } }">表演節目</router-link>
    <router-link  :class="{ active: $route.params.category == 'workshops' }"
                  :to="{ name: 'events', params: { category: 'workshops' } }">工作坊</router-link>
    <router-link  :class="{ active: $route.params.category == 'lectures' }"
                  :to="{ name: 'events', params: { category: 'lectures' } }">講座</router-link>
    <router-link  :class="{ active: $route.params.category == 'markets' }"
                  :to="{ name: 'events', params: { category: 'markets' } }">主題市集</router-link>
  </div>
</template>

<style scoped lang="scss">
  .tabs a {
    z-index: 11000;
  }
</style>