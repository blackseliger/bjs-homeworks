class Weapon {
    constructor ({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.remainingDurability = `remainingDurability`;
        this.percentDurability = durability * 1/100;
        this.originDurability = durability;
    }


    takeDamage(takeDamage) {
        this.remainingDurability = this.durability - takeDamage;
        if (this.remainingDurability < 0) {
            return this.durability = 0;
        } else {
            this.durability = this.remainingDurability
            return this.durability;
        }
    }


    getDamage() {
           
        let calcProcentRemDurability = (this.durability * 100)/ this.originDurability;
        if ( (this.percentDurability - calcProcentRemDurability) >= (this.originDurability * 0.3)) {
            return this.attack; 
        } else if ((this.percentDurability - calcProcentRemDurability) < (this.originDurability * 0.3)) {
            return this.attack/2;
        } else if ( this.durability === 0) {
            return 0;
        }
        }

    

    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
        
}

// экземляры

class Arm extends Weapon {
    constructor(name, attack, durability, range) {
        super({name, attack, durability, range});
        this.name = `Рука`;
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
    }
}

// подкласс Arm

class SubclassArm extends Arm {

}

class Bow extends Weapon {
    constructor() {
        // что происходит если оставить конструктор и супер пустыми? 
        //  все кажется работает и так.
        super({});
        this.name = `Лук`;
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    }
}

class Sword extends Weapon {
    constructor(){
    super({});
    this.name = `Меч`;
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
    }
}

class Knife extends Weapon {
    constructor(){
        super({});
        this.name = `Нож`;
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
    }
}

class Stick extends Weapon {
    constructor(){
        super({});
        this.name = `Посох`;
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
    }
}

class LongBow extends Bow {
    constructor(durability){
        //  что происходит если к примеру оставить durability только в конструктуре? А super оставить пустым?
        //  по началу написал durability только в super и была ошибка, что durability не найдена.
        super({durability});
        this.name = `Длинный лук`;
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor(range){
        super({range});
        this.name = `Секира`;
        this.attack = 27;
        this.durability = 800;
    }
}

class StickStorm extends Stick {
    constructor(durability){
        super({durability});
        this.name = `Посох Бури`;
        this.attack = 10;
        this.range = 3;
    }
}

let arm = new Arm();
let bow = new Bow();
let sword = new Sword();
let knige = new Knife();
let stick = new Stick();
let longBow = new LongBow();
let axe = new Axe();

console.log(arm.name); // рука

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); 


// third task

class StudentLog {
    constructor(NameStudent, grade, subject){
        this.NameStudent = NameStudent;
        this.grade = grade;
        this.subject = subject;
    }

    getName() {
        return NameStudent;
    }

    addGrade(grade, subject) {
       function calcGrade(grade) {
           let sum = 0;
           let i = 0;
           for (let prop in grade) {
               sum += grade[prop];
               i++
           } return i;
       }
       let caseGrades = new Object();
       caseGrades.push = subject;
        if ( +grade && (grade >= 1 && grade <= 5 )) {
            caseGrades.subject = grade;
            return calcGrade(grade)

            } else if (isNaN(grade)) {
                console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
                return 0;
            } else {
                console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
                return calcGrade(grade);
            }
            } 

    getAveageBySubject(subject) {
    //    замыкание?
    // еще раз подумать после отправки
    }
}

let log = new StudentLog(`Oleg`);
console.log(log.addGrade(3, 'algebra'));