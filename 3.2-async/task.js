class AlarmClock {
    
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    }

    addClock(time, callback, id) {

        if ( id === undefined) {
            console.error(`не передан индификатор будильника`);
            break;
        } else if ( this.alarmCollection.some(objectofAlarm => objectofAlarm.id === id )){
            console.error(`будильник с таким индификатором уже существует`);
            break;
        }
        let timer = new Date(time);  // так переводят в формат времени?
        
       let setAlarm = setTimeout(() => {
           callback();
       }, timer);
       
       let clock = new Object();
       clock.time = timer;
       clock.callback = callback;
       clock.id = id;

       this.alarmCollection.push(clock);
       return setAlarm();
    }

    removeClock(id) {
       let fixedCollection =  this.alarmCollection.filter( alarm => this.alarmCollection[alarm][id] !== id );
       return (fixedCollection == true)? `success`: `fault`
    }


    getCurrentFormattedTime(){
        return timer; 
    }

    start() { // вызывать какой колбэк?
        let checkClock = function(clock) {
             // как узнать текущее время в часах и минутах? Именно одной функцией? есть Data.getHours and Data.getMinutes. 
        }
    }

    stop(){

    }

    printAlarms(){

    }

    clearAlarms(){

        
    }



}

let phoneAlarm = new AlarmClock();
