<template>
  <section class="default-bg default-page">
    <Navbar></Navbar>

    <Tabs></Tabs>

    <Schedule v-if="$route.params.category == undefined"></Schedule>
    <List v-else></List>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Tabs from '@/components/Event/Tabs.vue'
import Schedule from '@/components/Event/Schedule.vue'
import List from '@/components/Event/List.vue'
export default {
  name: "events",
  components: {
    Navbar,
    Tabs,
    Schedule,
    List
  },
}
</script>