// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let calculationRectangleArea = (width, height) => width * height;
console.log(calculationRectangleArea(2,10));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

let calculateAreaCircle = (radius) => Math.PI * Math.pow( +radius, 2);
console.log(calculateAreaCircle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let calculateAreaCylinder = (height, radius) => (Math.PI * 2) * radius * (radius + height);
console.log(calculateAreaCylinder(10, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

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
const arrayElement = (array) => {
    for (let i = 0; i < array.length; i++) {
        const arrayElement1 = array[i];
        console.log(arrayElement1);
    }
};

arrayElement(users);
arrayElement([50,2, true, 'string']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createParagraphText = (textsObgact) => {
    for (const textsKey in textsObgact) {
        document.write(`
                   <div>
                       <p>${textsObgact[textsKey]}</p>
                   </div>
                   `);
    }

};
createParagraphText ({
    p1: 'Cтворити функцію яка створює параграф з текстом. Текст задати через аргумент.',
    p2: 'Cтворити функцію яка створює параграф з текстом. Текст задати через аргумент'
})


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createListOfThreeItems = (textLi) => {
    document.write(`<ul> List
                        <li>${textLi}</li>
                        <li>${textLi}</li>
                        <li>${textLi}</li>
                    </ul>`);
}
createListOfThreeItems('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createLisItems = (textLi = 'ul', amountLi) => {
    for (let i = 0; i < amountLi; i++) {
        document.write(`<li>${textLi}</li>`)
    }
}
createLisItems('List', 5);
createLisItems('Arguments don`t work here', 9);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayPrimitivesList = (array) => {
    document.write(`<ul> list `);
    for (const arrayElements of array) {
        document.write(`
                       <li>${arrayElements}</li>
        `);
    }
    document.write(`</ul>`);
}

arrayPrimitivesList(['name','Anastasia',33, true,'developer']);

a = [false,'string',33, true,];
arrayPrimitivesList(a);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

let arrayObjacts = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>`);
        for (const elementObj in arrayElement) {
            document.write(`${elementObj} - ${arrayElement[elementObj]}`)
        }
        document.write(`</div>`);
    }
}
arrayObjacts(users);


// - створити функцію яка повертає найменьше число з масиву

let minNumber = (arrayNumbers) => {
    let min = arrayNumbers[0];
    for (const arrayElement1 of arrayNumbers) {
        if (arrayElement1 < min){
            return arrayElement1;
        }
    }
}

console.log(minNumber([90,5,30,55,478,1]));
console.log(minNumber([-60,-20,5,-150]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13

let sum = (...arrayNumbers) => {
    let sumsN = 0
    for (const arrayNumber of arrayNumbers) {
        sumsN = sumsN + arrayNumber;
    }
    console.log(sumsN);
}

sum (9,1,10,30);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//   Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    let arrElement = arr[index1];
    arr [index1] = arr [index2];
    arr [index2] = arrElement
    return arr;
}

console.log( swap([11,22,33,44], 0, 1));
console.log(swap([66,10,44,50],2, 3));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//   Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency===exchangeCurrency){
            return sumUAH / currencyValue.value
        }
    }
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));