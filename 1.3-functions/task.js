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

   function getAverageScore(data) {
      function getAverageMark(marks) {
          let sum = 0;
          for ( let i = 0; i < marks.length; i++ ) {
              sum += marks[i];
          } return (marks.length > 0)? sum/marks.length: 0;
      }; 
        let result = new Object();
        let resultArray = [];
        for (let prop in data) {
            result[prop] = getAverageMark(data[prop]);
            resultArray.unshift(getAverageMark(data[prop]));
        }
        result.average = getAverageMark(resultArray);
        return result;
   }
    console.log(getAverageScore(
        {
            algebra:[2,4,5,2,3,4],
            geometry:[2,4,5],
            russian:[3,3,4,5],
            physics:[5,5],
            music:[2,2,6],
            english:[4,4,3],
            poetry:[5,3,4],
            chemistry:[2],
            french:[4,4]
        }
        ));

        //  Здравствуйте! Пожалуйста помогите понять что происходит с 48 строчки до 52. 
        // Дело в том, что мне заняло несколько дней, чтоб понять что требуется в задании. В итоге так
        //  и не смог разобраться. И подсмотрел чужой код. Не могу понять, как работает метод 
        // обхода свойств. Простите что вышла такая ситуация.