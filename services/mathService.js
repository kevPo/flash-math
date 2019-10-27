const numbers = [];
numbers[0] = 1;
numbers[1] = 10;
numbers[2] = 100;
numbers[3] = 1000;
numbers[4] = 10000;

const getAdditionEquations = function(numberOfEquations, topCount, bottomCount) {
  let equations = [];

  for (var i = 0; i < numberOfEquations; i++) {
    const topNumber = randomIntFromInterval(numbers[topCount-1], numbers[topCount]);
    const bottomNumber = randomIntFromInterval(numbers[bottomCount-1], numbers[bottomCount]);
    const answer = topNumber + bottomNumber;

    equations.push({
      id: i + 1,
      topNumber,
      bottomNumber,
      answer,
      operator: '+'
    })
  }

  return equations;
};

const getSubtractionEquations = function(numberOfEquations, topCount, bottomCount) {
  let equations = [];

  for (var i = 0; i < numberOfEquations; i++) {
    const topNumber = randomIntFromInterval(numbers[topCount-1], numbers[topCount]);
    const bottomNumber = randomIntFromInterval(numbers[bottomCount-1], numbers[bottomCount]);
    const answer = topNumber - bottomNumber;

    equations.push({
      topNumber,
      bottomNumber,
      answer
    })
  }

  return equations;
};

const getMultiplicationEquations = function(numberOfEquations, topCount, bottomCount) {
  let equations = [];

  for (var i = 0; i < numberOfEquations; i++) {
    const topNumber = randomIntFromInterval(numbers[topCount-1], numbers[topCount]);
    const bottomNumber = randomIntFromInterval(numbers[bottomCount-1], numbers[bottomCount]);
    const answer = topNumber * bottomNumber;

    equations.push({
      topNumber,
      bottomNumber,
      answer
    })
  }

  return equations;
};

const getDivisionEquations = function(numberOfEquations, topCount, bottomCount) {
  let equations = [];

  for (var i = 0; i < numberOfEquations; i++) {
    const topNumber = randomIntFromInterval(numbers[topCount-1], numbers[topCount]);
    const bottomNumber = randomIntFromInterval(numbers[bottomCount-1], numbers[bottomCount]);
    const answer = topNumber / bottomNumber;

    equations.push({
      topNumber,
      bottomNumber,
      answer
    })
  }

  return equations;
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  getAdditionEquations,
  getSubtractionEquations,
  getMultiplicationEquations,
  getDivisionEquations
};
