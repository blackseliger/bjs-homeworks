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
    
    // if (marks.length > 5) {
    //     let sum = 0;
    //     console.log("Превышено количество оценок");
    //     marks.splice(5, marks.length);
    //     for ( let i; i < marks.length; i++) {
    //         sum =+ marks[i];
    //     } 
    //     let AverageMark = [];
    //     let average = sum/marks.length;
    //     AverageMark.push(average);
    //     return AverageMark;
    // } else if (marks.length <= 5) {
    //     let sum = 0;
    //     for ( let i; i < marks.length; i++) {
    //         sum =+ marks[i];
    //     } 
    //     let average = sum/marks.length;
    //     let AverageMark = [];
    //     AverageMark.push(average);
    //     return AverageMark; 
    // }
    function averageMark() {
        let sum = 0;
        for (let i; i < marks.length; i++) {
            sum = sum + marks;
        } let average = sum/marks.length;
        marks.push(average);
        return marks;
    }

    if (marks.length > 5) {
        console.log('Превышено количество оценок');
        marks.splice(5, marks.length);
        console.log(marks);
        averageMark();
    } else if (marks.length <= 5) {
        averageMark();
    }
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}