// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = ['water', 20, true, 'sun', '+75 F', false, 'windy', '14 mph', 'weather', true];
console.log(length, array);
console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[8]);
// console.log(array[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books = [
    {title:'Anastasia', pageCount: 210, genre:'history'},
    {title:'How work Google', pageCount: 304, genre:'scientist'},
    {title:'Thus spoke Zarathustra', pageCount: 369, genre:'philosophy'}
]
console.log(books[1]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
//   Кожен автор має поля name та age.
let books2 = books;
books2[0] [3] = authors = [{name: 'Vladimir Megre', age: '73'}];
books[1] [3] = authors = [{name: 'Eric Schmidt', age: '68'},{name: 'Jonathan Rosenberg', age: '62'}];
books[2] [3] = authors = [{name: 'Friedrich Nietzsche', age: '56'}];
console.log(books2);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//   Вивести в консоль пароль кожного користувача
let users =[
    {name: 1, username: 'James' ,password: 16252116 },
    {name: 2, username: 'Michael' ,password: '1f3647h6'},
    {name: 3, username: 'Barbara' ,password: 56984328},
    {name: 4, username: 'Thomas' ,password: '364d856f47'},
    {name: 5, username: 'Karen' ,password: 268443657},
    {name: 6, username: 'Lisa' ,password: '254rb9832h5'},
    {name: 7, username: 'Anthony' ,password: 4698524434},
    {name: 8, username: 'Ashley' ,password: 254935587},
    {name: 9, username: 'Andrew' ,password: '97dg1gh564328jj'},
    {name: 10, username: 'Melissa' ,password: 36574692}
]

console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5] ['password']);
// console.log(users[6] ['password']);
// console.log(users[7] ['password']);
// console.log(users[8] ['password']);
// console.log(users[9] ['password']);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('Please write number');
// if (x !== 0){
//     document.write("<h1>True!</h1>")
// } else {
//     console.log('False!')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt()

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
//   (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
//   що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.
//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//   (хибноподібні, тобто приводиться до false)
//
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
//   на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
