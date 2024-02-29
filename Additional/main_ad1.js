// // --створити масив з:
// // - з 5 числових значень
// let arrNumber = [33,44,555,999,1000];
// // - з 5 стічкових значень
// let arrString = ['name', 'age', 'list', 'string', 'time'];
// // - з 5 значень стрічкового, числового та булевого типу
// let arrMix = ['mix', 66, true, 'array', false];
// // - та вивести його в консоль
// console.log(arrNumber);
// console.log(arrString);
// console.log(arrMix);
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// //    Вивести в консоль
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

//
//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// let array = [2,17,13,6,22,31,45,66,100,-18];

//     1. перебрати його циклом while
// let i = 0;
// while (i < array.length){
//     let arr = array[i];
//     console.log(arr);
//     i++;
// }

// let i = array.length -1;
// while (i >= 0 ){
//     let arr = array[i];
//     console.log(arr)
//     i--;
// }

//     2. перебрати його циклом for

// for (let i = 0; i < array.length; i++) {
//     let arrayElement = array[i];
//     console.log(arrayElement);
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < array.length){
//     let arr = array[i];
//     if (arr % 2 !== 0){
//         console.log(arr)
//     }
//     i++;
// }

// let i = array.length - 1;
// while (i >= 0){
//     let arr = array[i];
//     if (arr % 2 !== 0){
//         console.log(arr)
//     }
//     i--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let j = 0; j < array.length; j++) {
//     const arrayElement = array[j];
//     if (arrayElement % 2 !== 0){
//         console.log(arrayElement)
//     }
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     if (arrayElement % 2 !== 0){
//         console.log(arrayElement)
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < array.length){
//     let arr = array[i];
//     if (arr % 2 === 0){
//         console.log(arr)
//     }
//     i++;
// }

// let i = array.length -1;
// while (i >= 0){
//     let arr = array[i];
//     if (arr % 2 === 0){
//         console.log(arr)
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let j = 0; j < array.length; j++) {
//     const arrayElement = array[j];
//     if (arrayElement % 2 === 0){
//         console.log(arrayElement)
//     }
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     if (arrayElement % 2 === 0){
//         console.log(arrayElement)
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let j = 0; j < array.length; j++) {
//     const arrayElement = array[j];
//     if (arrayElement % 3 === 0){
//         console.log(j, array.arrayElement=['okten']);
//     }
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     if (arrayElement % 3 === 0){
//         console.log(i, array.arrayElement=['okten']);
//     }
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
