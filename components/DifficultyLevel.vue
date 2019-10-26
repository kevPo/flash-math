<template>
  <section>
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
          <div>{{operator}}</div>
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
        <button class="btn" v-on:click="$emit('lets-go', {top: topCount.length, bottom: bottomCount.length})">Let's Go!</button>
      </div>
  </section>
</template>

<script>

export default {
  props: ['operator'],
  data: function() {
    return {
      topCount: "1",
      bottomCount: "1"
    };
  },
  methods: {
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