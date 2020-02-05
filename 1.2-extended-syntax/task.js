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
}


function getAverageMark(marks){
    
    if (marks.length > 5) {
            let sum = 0;
            console.log("Превышено количество оценок");
            marks.splice(5, marks.length);
            for ( let i = 0; i < marks.length; i++) {
                sum = sum + marks[i];
            } 
            let average = sum/marks.length;
            return average;
        } else if (marks.length <= 5) {
            let sum = 0;
            for ( let i = 0; i < marks.length; i++) {
                sum = sum + marks[i];     //  Почему, если тут написать sum =+ marks[i]; То команда не будет работать? 
                
            } 
            let average = sum/marks.length;
            return average; 
        }
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}