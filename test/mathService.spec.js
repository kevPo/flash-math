import mathService from "~/services/mathService.js";

describe('Math Service', () => {
  test('getAdditionEquations returns correct number of equations', () => {
    const equations = mathService.getAdditionEquations(2, 2, 2);
    expect(equations.length).toBe(2);
  })

  test('getAdditionEquations returns correct answer for equation', () => {
    const equations = mathService.getAdditionEquations(1, 2, 2);
    const equationAnswer = equations[0].topNumber + equations[0].bottomNumber;

    expect(equations[0].answer).toBe(equationAnswer);
  })

  test('getAdditionEquations returns correct operator', () => {
    const equations = mathService.getAdditionEquations(1, 2, 2);
    expect(equations[0].operator).toBe('+');
  })

  test('getAdditionEquations returns correct number of digits for top and bottom numbers', () => {
    const equations = mathService.getAdditionEquations(1, 3, 4);
    
    expect(equations[0].topNumber > 99 && equations[0].topNumber < 1000).toBeTruthy();
    expect(equations[0].bottomNumber > 999 && equations[0].bottomNumber < 10000).toBeTruthy();
  })

  test('getSubtractionEquations returns correct number of equations', () => {
    const equations = mathService.getSubtractionEquations(2, 2, 2);
    expect(equations.length).toBe(2);
  })

  test('getSubtractionEquations returns correct answer for equation', () => {
    const equations = mathService.getSubtractionEquations(1, 2, 2);
    const equationAnswer = equations[0].topNumber - equations[0].bottomNumber;

    expect(equations[0].answer).toBe(equationAnswer);
  })

  test('getSubtractionEquations returns correct operator', () => {
    const equations = mathService.getSubtractionEquations(1, 2, 2);
    expect(equations[0].operator).toBe('-');
  })

  test('getSubtractionEquations returns correct number of digits for top and bottom numbers', () => {
    const equations = mathService.getSubtractionEquations(1, 3, 4);
    
    expect(equations[0].topNumber > 99 && equations[0].topNumber < 1000).toBeTruthy();
    expect(equations[0].bottomNumber > 999 && equations[0].bottomNumber < 10000).toBeTruthy();
  })
})
