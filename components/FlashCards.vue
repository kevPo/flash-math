<template>
  <section class="container">
    <div class="card">
      <FlashCardQuestion v-if="this.askingQuestion" v-on:question-answered="questionAnswered" :equation='equations[currentQuestionId]'/>
      <FlashCardResult v-else-if="!this.done" v-on:next-equation="getNextEquation" :status="this.currentQuestionStatus" />
      <div v-else>More Coming Soon Mackenzie!</div>
    </div>
  </section>
</template>
<script>
import FlashCardQuestion from "~/components/FlashCardQuestion.vue";
import FlashCardResult from "~/components/FlashCardResult.vue";

export default {
    components: {
    FlashCardQuestion,
    FlashCardResult
  },
  props: ['equations'],
  data: function() {
    return {
      currentQuestionId: 0,
      askingQuestion: true,
      currentQuestionStatus: {
        equation: {},
        answer: 0,
        correct: false
      },
      results: [],
      done: false
    };
  },
  methods: {
    questionAnswered: function(answer) {
      const equation = this.equations[this.currentQuestionId];
      const correct = equation.answer == answer;
      this.currentQuestionStatus = {
        equation,
        answer,
        correct
      };
      this.results.push(this.currentQuestionStatus);
      this.askingQuestion = false;
    },
    getNextEquation: function() {
      this.currentQuestionId++;
      
      if (this.currentQuestionId < this.equations.length)
        this.askingQuestion = true;
      else
        this.done = true;
    }
  }
}
</script>

<style>
.card {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  color: #5244c2;
  display: inline-block;
  font-size: 3em;
  height: 400px;
  margin: .5rem;
  padding: 2rem;
  position: relative;
  width: 300px;
}
</style>