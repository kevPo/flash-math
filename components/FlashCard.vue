<template>
  <div class="card">
    <div class="equation">
      <div></div>
      <div>{{equation.topNumber}}</div>
      <div class="operator">{{equation.operator}}</div>
      <div>{{equation.bottomNumber}}</div>
    </div>
    <div class="container-vertical answer">
      <input v-model="answer" type="number">
      <button class="btn">Answer</button>
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

.answer > button {
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