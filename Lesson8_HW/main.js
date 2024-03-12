// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
console.log(users);

users.push(new User(10, 'vasya', 'stepanov', 'Vstep1987@gmail.com', 80676975245));
users.push(new User(63, 'natalia', 'bobrova', 'bobNaT@ukrnet.com', 683849259));
users.unshift(new User(13, 'masha', 'kroluk','KrOluK@outlook.com', 380502249654));
users.push(new User(9,'sergey', 'zhuravlev', 'SZ@gimail.com', 674485463));
users.unshift(new User(22, 'rima','gorees', 'GoReS@ukrnet.com', 4406987256));
users.push(new User(47, 'misha', 'dobrunin', 'Dobrunia@gmail', 380506948675));
users.unshift(new User(36, 'roma', 'kolosov', 'KoloS@outlook.com', 930983547));
users.push(new User(100, 'romeo', 'montecchi', 'Montecchi@old.xx', 987456321));
users.unshift(new User(101, 'julietta', 'capuleti', 'Capuleti@old.xx', 897456123));
users.unshift(new User(40, 'kostiy', 'molochay', 'Molxxx@ukrnet.com', 30935486255));

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterIdPair = users.filter(value => value.id % 2 === 0);
console.log(filterIdPair);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

let sortIdGrowing = users.sort((a,b) => {
    return a.id - b.id;
});
console.log(sortIdGrowing);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = [order];
    }
}

// console.log(new Client);

let clients = [];
console.log(clients);

clients.push (new Client(1, 'some1', 'someS1', '@1', 300000000000, ['phone', 'camera', 'usb']));
clients.push (new Client(2, 'some1', 'someS1', '@1', 300000000000, ['pillow', 'blanket',]));
clients.push (new Client(3, 'some1', 'someS1', '@1', 300000000000, ['rose', 'tulip', 'sunflower', 'dracaena']));
clients.push (new Client(4, 'some1', 'someS1', '@1', 300000000000, ['paper wall']));
clients.push (new Client(5, 'some1', 'someS1', '@1', 300000000000, ['tea', 'coffee', 'juice', 'water', 'mineral water']));
clients.push (new Client(6, 'some1', 'someS1', '@1', 300000000000, ['jeans', 'sweater']));
clients.push (new Client(7, 'some1', 'someS1', '@1', 300000000000, ['lipstick', 'ink', 'tone']));
clients.push (new Client(8, 'some1', 'someS1', '@1', 300000000000, ['cube', 'circle', 'liner']));
clients.push (new Client(9, 'some1', 'someS1', '@1', 300000000000, ['bread']));
clients.push (new Client(10, 'some1', 'someS1', '@1', 300000000000, ['classic', 'drama', 'thriller']));

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

let sortLenghtOrder = clients.sort ((a, b) => {

});

console.log(sortLenghtOrder);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
