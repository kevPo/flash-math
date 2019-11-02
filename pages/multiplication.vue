<template>
  <Game 
    title="Multiplication"
    operator="x"
    :equations="equations" 
    @getEquations="setEquations" />
</template>

<script>
import Game from "~/components/Game.vue";
import mathService from "~/services/mathService.js";

export default {
  components: {
    Game
  },
  data: function() {
    return {
      equations: []
    };
  },
  methods: {
    setEquations: function(equationSettings) {
      this.equations = mathService.getMultiplicationEquations(equationSettings.numberOfQuestions, equationSettings.top, equationSettings.bottom);      
    }
  }
}
</script>
