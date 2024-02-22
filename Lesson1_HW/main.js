// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let numA = 1;
console.log(numA);
let numB = 10;
console.log(numB);
let numC = -999;
console.log(numC);
let numD = 123;
console.log(numD);
let numP = 3.14;
console.log(numP);
let numE = 2.7;
console.log(numE);
let numF = 16;
console.log(numF);
let booleanT = true;
console.log(booleanT);
let booleanF = false;
console.log(booleanF);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Anastasia';
let middleName = 'Bogdanivna';
let lastName = 'Muravlova';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100;
    let b = '100';
    let c = true;
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('What is you name?');
// console.log(name);
let middleN = prompt('Wat is you middle name?');
// console.log(middleN);
let age = prompt('How old are you?');
// console.log(age);
console.log(`${name} ${middleN} ${age}`);