<template>
  <section class="container">
    <FlashCard :equation='equations[id]'/>
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
      id: 0
    };
  }
}
</script>

<style>

</style>