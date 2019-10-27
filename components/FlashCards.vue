<template>
  <section class="container">
    <FlashCard v-on:next-equation="getNextEquation" :equation='equations[id]'/>
  </section>
</template>

<script>
import FlashCard from "~/components/FlashCard.vue";

export default {
    components: {
    FlashCard
  },
  props: ['equations'],
  data: function() {
    return {
      id: 0,
      results: []
    };
  },
  methods: {
    getNextEquation: function(previousResult) {
      this.results.push({
        ...this.equations[this.id],
        correct: previousResult
      });
      this.id++;
    }
  }
}
</script>

<style>

</style>