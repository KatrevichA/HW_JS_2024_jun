// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calculationRectangleArea(width, height) {
    return width * height;
}

let attribute = calculationRectangleArea(2, 8);
console.log(attribute);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calculateAreaCircle(radius) {
    let radius_2 = radius * radius;
    return 3.14 * radius_2;
}

let attributeCircle = calculateAreaCircle(12);
console.log(attributeCircle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calculateAreaCylinder(height, radius) {
    return 2 * 3.14 * radius * (radius + height)
}

let attributeCylinder = calculateAreaCylinder(10, 2);
console.log(attributeCylinder);

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayElement(array) {
    for (const arrayElement1 of array) {
        console.log(arrayElement1)
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

arrayElement(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraphText() {
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];
        document.write(`
                   <div>
                       <p>${argument}</p>
                   </div>
                   `);
    }
}

createParagraphText ('Cтворити функцію яка створює параграф з текстом. Текст задати через аргумент.', 'Cтворити функцію яка створює параграф з текстом. Текст задати через аргумент')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<ul> Skills`)
function createListOfThreeItems(write_thri_li) {
    for (let i = 0; i < 3; i++) {
        const argument = arguments[i];
        document.write(`
                       <li>${argument}</li>
        `)
    }
    document.write(`</ul>`)
}

createListOfThreeItems('html;', 'css', 'js', 'react_test_function');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write(`<ul> Skills`);
function createLisItems(textLi, amountLi) {
    for (let i = 0; i < amountLi; i++) {
        document.write(`
                       <li>${textLi}</li>
        `)
        console.log(arguments);
    }
    document.write(`</ul>`);
}
createLisItems('List', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


function arrayPrimitivesList(array) {
    for (const arrayElements of array) {
        document.write(`<ul>`);
        document.write(`
                       <li>${arrayElements}</li>
        `);
        document.write(`</ul>`);
    }
    document.write(`</ul>`);
}

arrayPrimitivesList('name','Anastasia',33, true,'developer');

a = ['name','Anastasia',33, true,'developer'];
arrayPrimitivesList(a);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.



// - створити функцію яка повертає найменьше число з масиву



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
