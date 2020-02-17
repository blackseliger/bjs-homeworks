"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let checkArguments = {
        percent,
        contribution,
        amount
    } ;
     for ( let prop in checkArguments) {
         if (isNaN(checkArguments[prop])){
             console.log(`Параметр ${prop} содержится нерпавильное значение ${checkArguments[prop]} `);
         }
     }
     
    let allMonths = new Date(date).getMonth() - new Date().getMonth() + ( 12 * (new Date(date).getFullYear() - new Date().getFullYear()));
    let credit = amount - contribution;
    let p = (percent/12)/100;
    let paymentForMonth = credit*(p+p/((((1+p)**allMonths)-1)));
    let totalAmount = allMonths * paymentForMonth;
    console.log(totalAmount.toFixed(2));
    return Number(totalAmount.toFixed(2));
    
}

function getGreeting(name) {
    function checkName(name) {
        if ((name === undefined) || (name === "") || (name === null)) {
            return 'Аноним';
        } else {
            return name
        };
    } 

return (`Привет, мир! Меня зовут ${checkName(name)}`);
    // код для задачи №2 писать здесь
    // return greeting;
}