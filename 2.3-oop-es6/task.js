class Weapon {
    constructor (name, attack, durability, range) {  // убрал фигурные скобки
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        // this.remainingDurability = `remainingDurability`; не нужно
        // this.percentDurability = durability * 1/100; не нужно
        this.originDurability = durability;
    }


    takeDamage(takeDamage) {
        this.remainingDurability = this.durability - takeDamage;
        if (this.durability - takeDamage < 0) {
            return this.durability = 0;
        } else {
            this.durability = this.durability - takeDamage;
            return this.durability;
        }
    }


    getDamage() {    
        let calcProcentRemDurability = (this.durability * 100)/ this.originDurability;
        if ( calcProcentRemDurability >= (this.originDurability * 0.3)) {
            return this.attack; 
        } else if (calcProcentRemDurability < (this.originDurability * 0.3)) {
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
    constructor(){
        super('Рука', 1, Infinity, 1);
    }
}


// // подкласс Arm
// class SubclassArm extends Arm {
// } пока не обращай внимание

class Bow extends Weapon {
    constructor() {
        super('Лук', 10, 200, 3);
    }
}

class Sword extends Weapon {
    constructor(){
    super('Меч', 25, 500, 1);
    }
}

class Knife extends Weapon {
    constructor(){
        super('Нож', 5, 300, 1);
    }
}

class Stick extends Weapon {
    constructor(){
        super('Посох', 8, 300, 2);
    }
}

class LongBow extends Bow {
    constructor(){
        super();
        this.name = `Длинный лук`;
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor(){
        super();
        this.name = `Секира`;
        this.attack = 27;
        this.durability = 800;
    }
}

class StickStorm extends Stick {
    constructor(){
        super();
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

sword.takeDamage(5);
console.log(sword.durability); 

sword.takeDamage(50);
console.log(sword.durability); 

arm.takeDamage(20);
console.log(arm.durability);

// third task

// class StudentLog {
//     constructor(NameStudent, grade, subject){
//         this.NameStudent = NameStudent;
//         this.grade = grade;
//         this.subject = subject;
//     }

//     getName() {
//         return NameStudent;
//     }

//     addGrade(grade, subject) {
//        function calcGrade(grade) {
//            let sum = 0;
//            let i = 0;
//            for (let prop in grade) {
//                sum += grade[prop];
//                i++
//            } return i;
//        }
//        let caseGrades = new Object();
//        caseGrades.push = subject;
//         if ( +grade && (grade >= 1 && grade <= 5 )) {
//             caseGrades.subject = grade;
//             return calcGrade(grade)

//             } else if (isNaN(grade)) {
//                 console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
//                 return 0;
//             } else {
//                 console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
//                 return calcGrade(grade);
//             }
//             } 

//     getAveageBySubject(subject) {
//     //    замыкание?
//     // еще раз подумать после отправки
//     }
// }

// let log = new StudentLog(`Oleg`);
// console.log(log.addGrade(3, 'algebra'));