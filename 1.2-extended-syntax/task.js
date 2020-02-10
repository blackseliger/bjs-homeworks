"use strict"

function getResult(a,b,c){
    let discriminant; 
    discriminant = b**2 - 4*a*c;
    let result = [];
    if ( discriminant == 0) {
        let x1 = ( (-b))/(2*a);
        result.push(x1);
    } else if (discriminant < 0) { 

    } else if ( discriminant > 0) {
        
        let x1 = ( (-b) + Math.sqrt(discriminant))/(2*a);
        let x2 = ( (-b) - Math.sqrt(discriminant))/(2*a);
        result.push(x1,x2);
        
    } 
    return result;
}


function getAverageMark(marks){
    let average;
    if (marks.length > 5) {
            console.log("Превышено количество оценок. Высчитывается только первые пять оценок");
            marks.splice(5, marks.length);
            } else if (!marks.length) {
                average = 0;
                return average;
            }
            let sum = 0;
            for ( let i = 0; i < marks.length; i++) {
            sum = sum + marks[i];
    } 
            average = sum/marks.length;
            return average;
}

function askDrink(name,dateOfBirthday){
   let todaydate = new Date().getFullYear();
   let ageVerification = todaydate - dateOfBirthday.getFullYear();
   if ( ageVerification >= 18) {
       console.log(`Не желаете ли олд-фэшн, ${name}?`);
   } else {
       console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
   } return todaydate;
}