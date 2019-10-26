<template>
  <div>
    <div class="container">
      <h2>How many questions do you want?</h2>
    </div>

    <div class="grid">
      <button v-on:click="$emit('set-questions', 5)" class="big-button">5</button>
      <button v-on:click="$emit('set-questions', 10)" class="big-button">10</button>
      <button v-on:click="$emit('set-questions', 15)" class="big-button">15</button>
      <button v-on:click="$emit('set-questions', 20)" class="big-button">20</button>
    </div>
  </div>
  
</template>