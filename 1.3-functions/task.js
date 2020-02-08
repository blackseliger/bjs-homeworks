function getSolutions(a, b, c) {
    let D = b**2 - 4*a*c;
  if (D < 0) {
      return {
        D: D, roots: []  
      };
  } else if ( D == 0 ) {
        let x1 = -b/2*a;   
    return {
        D: D, roots: [x1]
      };
  } else if ( D > 0) {
      let x1, x2;
      x1 = ( (-b) + Math.sqrt(D))/(2*a);
      x2 = ( (-b) - Math.sqrt(D))/(2*a);
      return {
          D: D, roots: [x1,  x2]
      };
  }  
}   

    function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${D}`);
    if (D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (D == 0) {
        console.log(`Уравнение имеет один корень Х1 = ${x1}`);
    } else if (D > 0){
        console.log(`Уравнение имеет два корня Х1 = ${х1}, X2 = ${x2}`);
    }
    }
