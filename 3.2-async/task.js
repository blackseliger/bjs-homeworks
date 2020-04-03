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
            if (this.alarmCollection.clock.id === undefined) {
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
        return this.alarmCollection.forEach(item => console.log(item));
    } 

    clearAlarms(){
        stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }



}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("21:00", () => console.log("Скоро спать"), 1)

phoneAlarm.addClock("21:01", () => { console.log("Пора готовиться ко сну!"), phoneAlarm.removeClock(2)}, 2);

phoneAlarm.addClock("21:01", () => console.log("Иди умываться!"));

phoneAlarm.addClock("21:02", () => {
    console.log("Иди спать, завтра рано на работу!");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);


phoneAlarm.addClock("21:05", () => console.log("Иди спать, завтра рано на работу!"), 1);


phoneAlarm.printAlarms()


// phoneAlarm.start();  // жалуется на 48 строчку, не могу выяснить решение 


