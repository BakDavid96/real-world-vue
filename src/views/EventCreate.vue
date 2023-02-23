<template>
  <div>
    <h1>Event Create, {{ user.name }}</h1>
    <p>Event Create, {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <p>Event {{ getEventById(1) }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    // getEvent() {
    //   return this.$store.getters.getEventById
    // },
    // catLength() {
    //   return this.$store.getters.catLength
    // },
    ...mapGetters(['getEventById', 'catLength']),
    ...mapState(['user', 'categories']),
  },
}
</script>

<style></style>
