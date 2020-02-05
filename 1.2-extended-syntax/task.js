function getResult(a,b,c){
    "use strict"
    let discriminate; 
    discriminate = b**2 - 4*a*c;
    if ( discriminate == 0) {
        let result = [];
        let x1 = ( (-b))/(2*a);
        result.push(x1);
        return result;
    } else if (discriminate < 0) {
        let result = [];
        return result;
    } else if ( discriminate > 0) {
        let result = [];
        let x1 = ( (-b) + Math.sqrt(discriminate))/(2*a);
        let x2 = ( (-b) - Math.sqrt(discriminate))/(2*a);
        result.push(x1,x2);
        return result;
    } 
    // код для задачи №1 писать здесь
    //return x;
}
    // return x;


function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}