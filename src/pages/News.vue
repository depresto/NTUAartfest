<template>
  <section class="default-bg default-page">
    <Navbar></Navbar>

    <Tabs></Tabs>

    <Default v-if="$route.params.category == undefined"></Default>
    <WideList v-else></WideList>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Tabs from '@/components/News/Tabs.vue'
import Default from '@/components/News/Default.vue'
import WideList from '@/components/News/WideList.vue'
export default {
  name: "news",
  components: {
    Navbar,
    Tabs,
    Default,
    WideList
  },
}
</script>