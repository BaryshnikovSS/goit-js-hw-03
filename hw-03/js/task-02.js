'use strict';

export function task_02() {

    // Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
    // Функция возвращает число - количество свойств.

    const countProps = (obj) => {

        return Object.values(obj).length;

    }



    console.log(countProps({})); // 0

    console.log(countProps({ name: 'Mango', age: 2 })); // 2
    
    console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

}