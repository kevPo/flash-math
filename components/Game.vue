<template>
  <section>
    <div class="container">
      <h1>{{ title }}</h1>
    </div>

    <div v-if="this.numberOfQuestions == 0">
      <QuestionCount v-on:set-questions="setNumberOfQuestions"/>
    </div>

    <div v-if="this.numberOfQuestions > 0 && !countComplete">
      <DifficultyLevel :operator="operator" v-on:lets-go="setDifficulty" />
    </div>

    <div v-if="this.play">
      <FlashCards :equations="equations" />
    </div>

  </section>
</template>

<script>
import QuestionCount from "~/components/QuestionCount.vue";
import DifficultyLevel from "~/components/DifficultyLevel.vue";
import FlashCards from "~/components/FlashCards.vue";

export default {
  props: ['title', 'operator', 'equations'],
  components: {
    QuestionCount,
    DifficultyLevel,
    FlashCards
  },
  data: function() {
    return {
      numberOfQuestions: 0,
      countComplete: false,
      counts: {},
      play: false,
      equations: []
    };
  },
  methods: {
    setNumberOfQuestions(numberOfQuestions) {
      this.numberOfQuestions = numberOfQuestions;
    },
    setDifficulty(counts) {
      this.counts = counts;
      this.countComplete = true;
      const equationSettings = {
        numberOfQuestions: this.numberOfQuestions,
        top: counts.top,
        bottom: counts.bottom
      }
      this.$emit('getEquations', equationSettings);
      this.play = true;
    }
  }
}
</script>
