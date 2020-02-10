//  first task

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

    // second task

    function getAverageScore(data){
        data = {
            algebra: [3,2,4],
            russian: [4,4,5]
        }
        let result = {
            
        }
    }

    function getAverageMark(marks) {
        let sum = 0;
        for ( let i; i < marks.length; i++) {
            sum += marks[i];
        } let averageOneSubject = sum/ marks.length;
        return averageOneSubject; 
    }
  
