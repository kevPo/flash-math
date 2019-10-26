<template>
  <section>
    <div class="container">
      <h1>
        Division
      </h1>
    </div>

    <div v-if="this.numberOfQuestions == 0">
      <QuestionCount v-on:set-questions="setNumberOfQuestions"/>
    </div>

    <div v-if="this.numberOfQuestions > 0 && !countComplete">
      <DifficultyLevel operator="/" v-on:lets-go="setDifficulty" />
    </div>

  </section>
</template>

<script>
import QuestionCount from "~/components/QuestionCount.vue";
import DifficultyLevel from "~/components/DifficultyLevel.vue";

export default {
  components: {
    QuestionCount,
    DifficultyLevel
  },
  data: function() {
    return {
      numberOfQuestions: 0,
      countComplete: false,
      counts: {}
    };
  },
  methods: {
    setNumberOfQuestions(numberOfQuestions) {
      this.numberOfQuestions = numberOfQuestions;
      console.log(this.numberOfQuestions);
    },
    setDifficulty(counts) {
      this.counts = counts;
      this.countComplete = true;
    }
  }
}
</script>
