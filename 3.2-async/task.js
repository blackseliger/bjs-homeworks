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
       let clock = {time, callback, id}
       this.alarmCollection.push(clock);
    }

    removeClock(id) {
        let alarmCollectionBefore = this.alarmCollection;
        this.alarmCollection =  this.alarmCollection.filter( alarm => alarm[id] !== id );
        return() => { if (alarmCollectionBefore === this.alarmCollection) {
            return false; 
             } 
             return true;
         }
     } 
    


    getCurrentFormattedTime() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let currentDate = `${hours}:${minutes}`
        return currentDate;
        
    }

    start() { 
        let checkClock = function(clock) {
            if (currentDate === clock.time) {
                clock.callback();
            }
        }
            if (clock.id === undefined) {
               setInterval(() => {
                this.alarmCollection
                    .map = (number) => {
                        clock.id =  checkClock(number);
                        this.timerId.unshift(clock.id);
                    } 
               }) // тут разве не должен указываться промежуток вызова функции? После }
            }
    }

    stop(){
        if (clock.id) {
            clearInterval(clock.id);
            this.timerId.shift();
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
        stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }



}

let phoneAlarm = new AlarmClock();

