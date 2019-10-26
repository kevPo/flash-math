<template>
  <section>
    <div class="container">
      <h1 class="title">
        Flash Math!
      </h1>
    </div>
    <div class="grid">
      <nuxt-link to="/addition" class="big-button">+</nuxt-link>
      <nuxt-link to="/subtraction" class="big-button">-</nuxt-link>
      <nuxt-link to="/multiplication" class="big-button">X</nuxt-link>
      <nuxt-link to="/division" class="big-button">/</nuxt-link>
    </div>
  </section>
</template>


<style>
@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy|Raleway&display=swap');

html {
  background: #e6e3fe;
  font-family: 'Raleway', sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.title {
  padding: .5em;
}

.grid {
  margin: 20px auto;
  width:400px;
  height:400px;
  display:grid;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.big-button {
  background: white;
  color: #5244c2;
  font-family: 'Luckiest Guy', cursive;
  font-size: 10em;
  padding: 5px;
  padding-top: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

h1 {
  color: #5244c2;
  font-family: 'Luckiest Guy', cursive;
  font-size: 10em;
}
</style>
