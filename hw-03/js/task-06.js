'use strict'

function task_06()

{

    // Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов 
    // и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).


    const products = [
        { name: 'Радар', price: 1300, quantity: 4 },
        { name: 'Сканер', price: 2700, quantity: 3 },
        { name: 'Дроид', price: 400, quantity: 7 },
        { name: 'Захват', price: 1200, quantity: 2 },
      ];
      

    const calculateTotalPrice = (arr, productName) => {

        for (const someArr of arr) {

            if (someArr['name'] === productName) {

                return someArr['price'] * someArr['quantity'];

            }

        }

    }


    console.log(calculateTotalPrice(products, 'Радар')); // 5200

    console.log(calculateTotalPrice(products, 'Дроид')); // 2800

}