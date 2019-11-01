<template>
  <div class="result">
    <span class="answer" v-bind:class="{ correct: status.correct, wrong: !status.correct }">{{ status.answer }}</span>
    <span class="correct result-sub" v-if="!status.correct">Correct Answer: {{ status.equation.answer }}</span>
    <span class="correct result-sub" v-if="status.correct">Nice Job!</span>
    <button v-focus v-on:click="$emit('next-equation')" class="btn">Next</button>
  </div>
</template>

<script>
export default {
  props: ['status'],
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style>
.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result-sub {
  font-size: 1.5rem;
  font-weight: bold;
}

.result > .answer {
  font-family: 'Luckiest Guy', cursive;
  font-size: 10rem;
  margin-top: auto;
}

.correct {
  color: #89e58d;
}

.wrong {
  color: #ff5a4e;
}

.result > .btn {
  margin-top: auto;
}
</style>