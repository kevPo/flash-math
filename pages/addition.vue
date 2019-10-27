<template>
  <section>
    <div class="container">
      <h1>
        Addition
      </h1>
    </div>

    <div v-if="this.numberOfQuestions == 0">
      <QuestionCount v-on:set-questions="setNumberOfQuestions"/>
    </div>

    <div v-if="this.numberOfQuestions > 0 && !countComplete">
      <DifficultyLevel operator="+" v-on:lets-go="setDifficulty" />
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
import mathService from "~/services/mathService.js";

export default {
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
      this.equations = mathService.getAdditionEquations(this.numberOfQuestions, counts.top, counts.bottom);
      this.play = true;
    }
  }
}
</script>
