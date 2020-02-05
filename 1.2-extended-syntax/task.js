function getResult(a,b,c){
    "use strict"
    let discriminate; 
    discriminate = b**2 - 4*a*c;
    if ( discriminate == 0) {
        let result = [x1];
        x1 = ( (-b))/(2*a);
        return result;
    } else if (discriminate < 0) {
        let result = [];
        return result;
    } else if ( discriminate > 0) {
        let result = [x1, x2];
        x1 = ( (-b) + Math.sqrt(d))/(2*a);
        x2 = ( (-b) - Math.sqrt(d))/(2*a);
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