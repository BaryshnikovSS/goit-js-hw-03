'use strict';

export function task_01() {

    // Напиши скрипт, который, для объекта user, последовательно:

    // добавляет поле mood со значением 'happy'
    // заменяет значение hobby на 'skydiving'
    // заменяет значение premium на false
    // выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of


    const user = {
        name: 'Mango',
        age: 20,
        hobby: 'html',
        premium: true,
    };

    user['mood'] = 'happy';
    user['hobby'] = 'skydiving';
    user['premium'] = false;

    for (const users of Object.keys(user)) {

        console.log(`${users}: ${user[users]}`);

    }

}