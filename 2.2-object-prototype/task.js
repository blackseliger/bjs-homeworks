function getAnimalSound(animal) {

    if ( animal === undefined) {
        return null;
    } else {
        let sound = animal.sound;
        return sound;
    }
}

function getAverageMark(marks) {
    
    let sum = 0;
    let i = 0;
    for ( let prop in marks) {
        if (+marks[prop]){
            sum += +marks[prop];
            i++
        } else {
            return 0;
        }
        }
    // for ( let i = 0; i< marks.length; i++) {
    //     sum += marks[i];
    // } 
    // let average = sum/marks.length;
    let average = sum/i;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = +date.now();
    let calcMonth = new Date(birthday).getMonth;
    let birthday = +date(birthday);
    let diff = birthday - now;
    let age = diff/now;
    return (age > 18)? `Да`: `Нет`;
    // код для задачи №3 писать здесь
    // return verdict
}