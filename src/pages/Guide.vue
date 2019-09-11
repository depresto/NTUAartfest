<template>
  <section id="guide" class="default-bg default-page">
    <Navbar></Navbar>

    <DefaultMap></DefaultMap>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import DefaultMap from '@/components/Guide/DefaultMap.vue'
export default {
  name: "guide",
  components: {
    Navbar,
    DefaultMap
  }
}
</script>