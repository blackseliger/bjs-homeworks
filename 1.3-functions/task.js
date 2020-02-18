//  first task

function getSolutions(a, b, c) {
    let d = b**2 - 4*a*c;
    // формула дискриминанта
  if (d < 0) {
      return {
        D: d, roots: []  
      };
    //   если Дискриминант меньше нулна, то выводится в виде объекта (или литерал, как называют) D ( D - это ключ или свойство) со значением 
    //   d.  Дальше ключ roots со значением пустового массива. 
  } else if ( d == 0 ) {
        let x1 = -b/2*a;   
    return {
        D: d, roots: [x1]
      };
    //    если d сравнивается с нулем ( равно  нулю ), то выводится объект с ключом D и значением d. И с ключем roots со значением массив с одной переменной x1.
  } else if ( d > 0) {
      let x1, x2;
      x1 = ( (-b) + Math.sqrt(d))/(2*a);
      x2 = ( (-b) - Math.sqrt(d))/(2*a);
      return {
          D: d, roots: [x1,  x2]
      };
    //   выводится объект с 2 ключами. D c значением d.   и roots с массивом из двух переменных. (х1 и х2)
  }  
}   

    function showSolutionsMessage(a, b, c) {
        //  записываем механику функции 
    let result = getSolutions(a, b, c);
    //  присваеваем переменной result функциональное выражение getSolutions. ( Результат сделанной работы функции getSolutions(a,b,c ) присваивается переменной result)
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    //  выводим в консоль с помощью шаблонной строки
    console.log(`Значение дискриминанта: ${result.D}`);
    //  выводим с помощью шаблонной, но так же обращаемся к ключу D с найденным значением объекта result (который ранее объявили и присвоили результат функции getSolution)
    if (result.D < 0) {
        //  если значение ключа D меньше нуля, выполняется следующее ( аналогично для сравнения с нулем, и больше с нулем)
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень Х1 = ${result.roots[0]}`);
        // тут уже обращаемся к ключу roots со массивом в значении. Массив начинается с нуля, нам нужно указать х1, который занимается 0-ю позицию в массиве. 
    } else if (result.D > 0){
        console.log(`Уравнение имеет два корня Х1 = ${result.roots[0]}, X2 = ${result.roots[1]}`);
        
    }
    }

    // second task

   function getAverageScore(data) {
      function getAverageMark(marks) {
        //   создаем вспомогательную функцию
          let sum = 0;
          for ( let i = 0; i < marks.length; i++ ) {
              sum += marks[i];
          } return (marks.length > 0)? sum/marks.length: 0;
      };  
    //   в вспомогательной функции написали механику нахождения среднего значения значений в массиве.
        let result = new Object();
        //  создаем объект result. Аналогично можно было записать let result = {};
        let resultArray = [];
        // создается массив в котором будет показатель средней оценки по всем предметам
        for (let prop in data) {
            result[prop] = getAverageMark(data[prop]);
            // объекту присваивают каждое уже рассчитанное свойство. Правильно понимаю, что data[prop] - это marks иными словами? 
            resultArray.unshift(getAverageMark(data[prop]));
        }
        result.average = getAverageMark(resultArray);
        // создается свойство  average, которому присваивается расчитанное значение функции getAverageMark
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
        function getPersonData(secretData){
            function getDecodedValue(secret){
                return secret == 1? 'Эмильо': 'Родриго';
            }
            // фунция getDecodeValue(secret) расчитывает, что будет возвращено при 1 или 0.
            let result = new Object();
            // создаем объект в который будет записан результат
            result.firstName = getDecodedValue(secretData.aaa);
            // присваеваем свойству firstName - расчет который будет записываться в виде свойства aaa с искоемым значением ( 0 или 1 ) 
            result.lastName = getDecodedValue(secretData.bbb);
            return result
        }

        console.log(getPersonData({aaa: 0, bbb: 0}));
        console.log(getPersonData({aaa: 1, bbb: 0}));
        console.log(getPersonData({aaa: 0, bbb: 1}));
        console.log(getPersonData({aaa: 1, bbb: 1}));
        
        //  по началу просто записал  result.firstName = getDecodedValue(secretData);