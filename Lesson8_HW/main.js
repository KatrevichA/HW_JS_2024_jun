// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function User(id, name, surname, email, phone) {
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
users.unshift(new User(13, 'masha', 'kroluk', 'KrOluK@outlook.com', 380502249654));
users.push(new User(9, 'sergey', 'zhuravlev', 'SZ@gimail.com', 674485463));
users.unshift(new User(22, 'rima', 'gorees', 'GoReS@ukrnet.com', 4406987256));
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

let sortIdGrowing = users.sort((a, b) => {
    return a.id - b.id;
});
console.log(sortIdGrowing);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {
    constructor(id, name, surname, email, phone, order= []) {
        super(id, name, surname, email, phone);
        this.order = order;
    }

}

// console.log(new Client);

let clients = [
    new Client(1, 'some1', 'someS1', '@1', 300000000000, ['phone', 'camera', 'usb']),
    new Client(2, 'some1', 'someS1', '@1', 300000000000, ['pillow', 'blanket',]),
    new Client(3, 'some1', 'someS1', '@1', 300000000000, ['rose', 'tulip', 'sunflower', 'dracaena']),
    new Client(4, 'some1', 'someS1', '@1', 300000000000, ['paper wall']),
    new Client(5, 'some1', 'someS1', '@1', 300000000000, ['tea', 'coffee', 'juice', 'water', 'mineral water']),
    new Client(6, 'some1', 'someS1', '@1', 300000000000, ['jeans', 'sweater']),
    new Client(7, 'some1', 'someS1', '@1', 300000000000, ['lipstick', 'ink', 'tone']),
    new Client(8, 'some1', 'someS1', '@1', 300000000000, ['cube', 'circle', 'liner']),
    new Client(9, 'some1', 'someS1', '@1', 300000000000, ['bread']),
    new Client(10, 'some1', 'someS1', '@1', 300000000000, ['classic', 'drama', 'thriller']),
];
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

let sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями -
//   модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car (model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };

    this.info = function () {
        console.log('--------CAR-------')
        for (const key in this) {
            if (typeof this[key] === 'function') continue;
            console.log(`${key.toUpperCase()} - ${this [key]}`);
        }
    };
    
    this.increaseMaxSpeed = function (newSpeed) {
        console.log('_________TEST DRIVE_________')
        if (this.maxSpeed >= newSpeed) {
            console.log(`Ваша швидкість в межах норми! ${newSpeed} км/год`)
        }
        if (this.maxSpeed < newSpeed){
            console.log(`Швидкість перевищує можливості цієї машини! ${newSpeed} км/год`)
        }
    }

    this.changeYear = function (newValue) {
        console.log('............NEW YEAR...........')
        this.year = newValue;
        console.log(`${this.year}`);
    }

    this.addDriver = function (name, experience) {
        console.log('---------DRIVER--------');
        this.driver = {name: name, experience: experience};
        console.log(`Водій - ${this.driver.name} ,  Досвід - ${this.driver.experience}`);
    }
}


let car1 = new Car('hennessy venome f5', 'hennessy', 2017, 484, 6.6);


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car1.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car1.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car1.increaseMaxSpeed(300);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
car1.changeYear(2019);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car1.addDriver('Vasya', 3);


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
class CarClass extends Car{
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        super(model, manufacturer, year, maxSpeed, engineVolume);
    }

}

let car2 = new CarClass('bugatti chiron super sport 300+', 'bugatti', 2019, 482, 8)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car2.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car2.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car2.increaseMaxSpeed(600);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
car2.changeYear(2020);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car2.addDriver('Kolya', 12);
console.log(car2);
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, ege, sizeFoot) {
        this.name = name;
        this.ege = ege;
        this.sizeFoot = sizeFoot;
    }
}

let cinderellas = [
    new Cinderella('Mash', 30, 42),
    new Cinderella('Sasha', 60, 39),
    new Cinderella('Liza', 25, 34),
    new Cinderella('Lucy', 29, 38),
    new Cinderella('Kat', 40, 44),
    new Cinderella('Monika', 31, 27),
    new Cinderella('Beel', 28, 36),
    new Cinderella('Zhenia', 15, 40),
    new Cinderella('Dol', 27, 39),
    new Cinderella('Nina', 27, 37)
];
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince extends Cinderella {
    constructor(name, ege, sizeFoot) {
        super(name, ege, sizeFoot);
    }

    forCinderella (array) {
        for (const arrayElement of array) {
            if (arrayElement.sizeFoot === this.sizeFoot){
                return arrayElement
            }
        }
    }

    findCinderella (array) {
        return array.find((cinderella) => cinderella.sizeFoot === 34);
    }


}

let p = new Prince('Roma', 30, 34);
console.log(p);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

console.log(p.forCinderella(cinderellas));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(p.findCinderella(cinderellas));