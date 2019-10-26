<template>
  <div>
    <div class="container">
      <nuxt-link to="/" class="logo">Flash Math!</nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy|Raleway&display=swap');

html {
  background: #e6e3fe;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.logo {
  color: #5244c2;
  font-family: 'Luckiest Guy', cursive;
  font-size: 6em;
  padding: .5em;
  text-decoration: none;
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
  cursor: pointer;
  font-family: 'Luckiest Guy', cursive;
  font-size: 6em;
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
  font-weight: bold;
  font-size: 2em;
  padding-bottom: 1em;
}

button {
  background: #5244c2;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 1em;
  font-size: 1.5em;
}

.pad-1 {
  padding: 5em;
}

</style>
