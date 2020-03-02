function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e)
 {

 }}

 function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

const compareArrays = function(arr1, arr2) {
   return (
     arr1.length === arr2.length &&
     arr1.every(function(el, i) {
      //   debugger;
      // console.log(el, i);
       return el === arr2[i];
     })
   );
 };

 function memorize (fn , limit) {
   let results = [];
   let i = 0;  // для замыкания 
    return function(){
      let arg = Array.from(arguments);  // массив аргументов возвращаемой функции
      let findObj = results.find(x => compareArrays(x.arg, args)); // x это обозначение свойства массива
      console.log(`Было сделано ${i++} вызовов `)
      // results.push({arg: args, result: fn })
      if (results.find === undefined ) {
         
         let calculation = fn.apply(null, args ); // как вызвать функцию? Это нормальный ход действий?
         console.log(`функция ${calculation} вызвана не из памяти.`)
         results.push({args: arg, result: calculation})
         if (result.length > limit) {
            result.shift();
         }
      } else {
         let calculation = findObj.result;
         console.log(`функция ${calculation} вызвана из памяти`)
      }
      return calculation;
    }
 }

 function testCase(testFunction, timer){
   let arrays = [ 
      [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] 
   ]

   console.time(timer);
   for ( let i = 0; i < 100; i++){
      let calledFunc = testFunction.apply(null, arguments);
      calledFunc.forEach(element => {
         return element * i;
      }); 
         };
   console.timeEnd(timer)
   }
 
   testCase(sum, 100) // какой таймер ставить?



