<template>
  <div>
    <div class="equation">
      <div></div>
      <div>{{equation.topNumber}}</div>
      <div class="operator">{{equation.operator}}</div>
      <div>{{equation.bottomNumber}}</div>
    </div>
    <div class="container-vertical answer">
      <input v-focus v-model="answer" v-on:keyup.enter="$emit('question-answered', answer)" type="number">
      <button v-on:click="$emit('question-answered', answer)" class="btn">Answer</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['equation'],
  data: function() {
    return {
      answer: ''
    }
  },
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
.equation {
  border-bottom: 10px solid #5244c2;
  font-family: 'Luckiest Guy', cursive;
  margin: 20px auto;
  width: 100%;
  display:grid;
  grid-template-columns: 1fr 2fr;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.operator {
  display: flex;
  justify-self: end;
}

.answer {
  height: 150px;
}

.result {
  height: 300px;
}

.answer > button,
.result > button {
  margin-top: auto;
}

.answer > input {
  border: none;
  color: #5244c2;
  font-family: 'Luckiest Guy', cursive;
  font-size: 3rem;
  padding-top: 1rem;
  padding-right: 1rem;
  text-align: right;
}
</style>