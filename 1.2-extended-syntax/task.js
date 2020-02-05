function getResult(a,b,c){
    "use strict"
    // let a;
// let b;
// let c;      Что значит реализовать функцию? Такой же вопрос на 51 строке.
// d = b**2 - 4*a*c 
let result = [];
Math.pow(b, 2);
let d = b - 4*a*c;
if ( d < 0) {
    result = [];
} else if ( d > 0 ) {
    let x1, x2;
    Math.sqrt(d);
    x1 = ( (-b) + d )/(2*a);
    x2 = ( (b) + d )/(2*a);
    result.push(x1 , x2);
    return result[x1][x2];
} else if ( d = 0) {
    let x1;
    Math.sqrt(d);
    x1 = ( (-b) + d )/(2*a);
    result.push(x1);
    return result[x1];
} 
// return x1, x2;
    // код для задачи №1 писать здесь
    //return x;
}
    // return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}