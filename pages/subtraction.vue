<template>
  <section>
    <div class="container">
      <h1>
        Subtraction
      </h1>
    </div>

    <div v-if="this.numberOfQuestions == 0">
      <div class="container">
        <h2>How many questions do you want?</h2>
      </div>

      <div class="grid">
        <button @click="setNumberOfQuestions(5)" class="big-button">5</button>
        <button @click="setNumberOfQuestions(10)" class="big-button">10</button>
        <button @click="setNumberOfQuestions(15)" class="big-button">15</button>
        <button @click="setNumberOfQuestions(20)" class="big-button">20</button>
      </div>
    </div>

    <div v-if="this.numberOfQuestions > 0 && !countComplete">
      <div class="container">
        <h2>How difficult do you want it?</h2>
      </div>

      <div class="container">
        <div class="grid-3">
          <div></div>
          <div class=counts>{{topCount}}</div>
          <ul class="numbers">
            <li :class="{'selected' : topCount.includes('1')}" @click="setTopCount(1)">1</li>
            <li :class="{'selected' : topCount.includes('12')}" @click="setTopCount(2)">2</li>
            <li :class="{'selected' : topCount.includes('123')}" @click="setTopCount(3)">3</li>
            <li :class="{'selected' : topCount.includes('1234')}" @click="setTopCount(4)">4</li>
          </ul>
          <div>-</div>
          <div class="counts">{{bottomCount}}</div>
          <ul class="numbers">
            <li :class="{'selected' : bottomCount.includes('1')}" @click="setBottomCount(1)">1</li>
            <li :class="{'selected' : bottomCount.includes('12')}" @click="setBottomCount(2)">2</li>
            <li :class="{'selected' : bottomCount.includes('123')}" @click="setBottomCount(3)">3</li>
            <li :class="{'selected' : bottomCount.includes('1234')}" @click="setBottomCount(4)">4</li>
          </ul>
        </div>
      </div>

      <div class="container pad-1">
        <button>Let's Go!</button>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data: function() {
    return {
      numberOfQuestions: 0,
      topCount: "1",
      bottomCount: "1",
      countComplete: false
    };
  },
  methods: {
    setNumberOfQuestions(numberOfQuestions) {
      this.numberOfQuestions = numberOfQuestions;
      console.log(this.numberOfQuestions);
    },
    setTopCount(topCount) {
      const numbers = "1234";
      this.topCount = numbers.substr(0, topCount);
    },
    setBottomCount(bottomCount) {
      const numbers = "1234";
      this.bottomCount = numbers.substr(0, bottomCount);
    }
  }
}
</script>

<style>

.title {
  font-size: 6em;
}

.container {
  display: flex;
  justify-content: center;
}

.grid {
  padding-top: 2em;
}

.grid-3 {
  padding-top: 1em;
  font-family: 'Luckiest Guy', cursive;
  font-size: 3em;
  margin: 5px auto;
  display:grid;
  grid-template-columns: auto 100px 150px;
  grid-row: auto auto;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.counts {
  justify-self: flex-end;
}

.numbers {
  display: flex;
  justify-self: end;
}

.numbers > li {
  color: white;
  margin: 2px;
}

.numbers > li:hover {
  cursor: pointer;
  color: #5244c2;
}

.numbers > li.selected {
  color: #5244c2;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>