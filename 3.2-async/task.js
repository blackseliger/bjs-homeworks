class AlarmClock {
    
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {

        if ( id === undefined) {
            console.error(`не передан индификатор будильника`);
            return;
        } else if ( this.alarmCollection.some(objectofAlarm => objectofAlarm.id === id )){
            console.error(`будильник с таким индификатором уже существует`);
            return;
        }
        // let timer = new Date(time);  // так переводят в формат времени?
    //    let setAlarm = setTimeout(() => {
    //        callback();
    //    }, time);    // timer и setAlarm тут не нужен. Убрал после первой проверки преподавателя
       
       let clock = {time, callback, id}
       this.alarmCollection.push(clock);
    //    return setAlarm(); не нужен
    }

    removeClock(id) {
        let alarmCollectionBefore = this.alarmCollection;
        let alarmCollectionAfter =  this.alarmCollection.filter( alarm => alarm[id] !== id );
        return() => { if (alarmCollectionBefore === alarmCollectionAfter) {
            return false; 
             } 
             return true;
         }
     } // правильно понял, смысл сохранения о котором Вы говорили тут?
    


    getCurrentFormattedTime() {
        let date = new Date();
            let hour = date.getHours() - (date.getHours() >= 12 ? 12 : 0);
            // let period = date.getHours() >= 12 ? 'PM' : 'AM';
            let CurrentDate = hour + 3 + ":" + date.getMinutes;
            return CurrentDate;
    }

    start() { 
        let checkClock = function(clock) {
            if (CurrentDate === clock.time) {
                clock.callback();
            }
        }
            if (clock.id === undefined) {
               setInterval(() => {
                this.alarmCollection
                    .map = (number) => {
                        clock.id =  checkClock(number);
                    } 
               }) 
            }
    }

    stop(){
        if (clock.id) {
            let clearInterval = () => {
// как удалить интервал?...
                clock.id = null;   // сделать индификатор снова без значени с помощью null. Так можно делать?
            }
        }
    }

    printAlarms(){
        let printAlarms = [];
        printAlarms.push(this.alarmCollection.id)
        printAlarms.push(this.alarmCollection.time)
        return() => {
            printAlarms.forEach(item => console.log(item));
        }
    } // не уверен по поводу работы этой все функции. Посмотрите, пожалуйста. Так как forEach затрагивает все элементы, а по условию нужны только элементы id, time
    //  больше мне ничего в голову не пришло, как создать новый массив и туда занести элементы

    clearAlarms(){
        clearTimeout() // что вписать в качестве аргумента?..
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }



}

let phoneAlarm = new AlarmClock();
