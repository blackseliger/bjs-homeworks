function getSolutions(a, b, c) {
    let d = b**2 - 4*a*c;
  if (d < 0) {
      return {
        D: d, roots: []  
      };
  } else if ( d == 0 ) {
        let x1 = -b/2*a;   
    return {
        D: d, roots: [x1]
      };
  } else if ( d > 0) {
      let x1, x2;
      x1 = ( (-b) + Math.sqrt(d))/(2*a);
      x2 = ( (-b) - Math.sqrt(d))/(2*a);
      return {
          D: d, roots: [x1,  x2]
      };
  }  
}   

    function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень Х1 = ${result.roots[0]}`);
    } else if (result.D > 0){
        console.log(`Уравнение имеет два корня Х1 = ${result.roots[0]}, X2 = ${result.roots[1]}`);
    }
    }
