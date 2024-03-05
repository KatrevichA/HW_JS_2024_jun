// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let greeting= 'hello world';
console.log(greeting.length);

console.log('lorem ipsum'.length);

let skills= 'javascript is cool';
for (const skillsElement of skills) {
    console.log(skillsElement.length);
}

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(greeting.toUpperCase());

let text = 'lorem ipsum';
console.log(text.toUpperCase());

console.log(skills.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
let greetingBig ='HELLO WORLD'; let textBig = 'LOREM IPSUM'; let skillsBig = 'JAVASCRIPT IS COOL';
console.log(greetingBig.toLowerCase());
console.log(textBig.toLowerCase());
console.log(skillsBig.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.length, [str]);
// let cleanStr = (str.trim());
// console.log(cleanStr.length, [cleanStr]);


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
let stringToarray = (str) => str.split(' ');
let arr = stringToarray(str);
console.log(arr);


//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let array = [10,8,-7,55,987,-1011,0,1050,0];
console.log(array);
let arrayMap = array.map(value => value + '');
console.log(arrayMap);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let sortNums =(nums, direction) =>{
    switch (direction) {
        case 'ascending':
            nums = nums.sort((a,b) =>a-b);
            break;
        case 'descending':
            nums =  nums.sort ((a,b) => b-a);
            break;
    }
    return nums
}
console.log(nums);
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sortMonthDuration = coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration;
});
console.log(sortMonthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredMonthDuration = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredMonthDuration);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mapId = coursesAndDurationArray.map((value, index) => {
    return {
        id: index +1,
        title: value.title,
        monthDuration: value.monthDuration
    }
});
console.log(mapId);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cardDeck = [
    {cardSuit: 'spades', value: '6', color: 'black'},
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
];
console.log(cardDeck);

// - знайти піковий туз

let spadeAce = cardDeck.find(value => value.value === 'ace' && value.cardSuit === 'spades');
console.log(spadeAce);

// - всі шістки

let six = cardDeck.filter(value => value.value === '6');
console.log(six);

// - всі червоні карти

let red = cardDeck.filter(value => value.color === 'red');
console.log(red);

// - всі буби

let diamond = cardDeck.filter(value => value.cardSuit === 'diamond');
console.log(diamond);

// - всі трефи від 9 та більше

let clubs = cardDeck.filter((value)=>value.cardSuit === 'clubs'&& ['9','10','jack','queen','ace'].includes(value.value));
console.log(clubs);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduceSuit = cardDeck.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuit === 'spades'){
        previousValue.spades.push(currentValue);
    }
    else if (currentValue.cardSuit === 'diamond'){
        previousValue.diamonds.push(currentValue);
    }
    else if (currentValue.cardSuit === 'heart'){
        previousValue.hearts.push(currentValue);
    }
    else if (currentValue.cardSuit === 'clubs'){
        previousValue.clubs.push(currentValue);
    }
    return previousValue
},{ spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(reduceSuit);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

let filterSass = coursesArray.filter(value => value.modules.includes('sass'));
console.log(filterSass);

// --написати пошук всіх об'єктів, в який в modules є docker

let filterDocker = coursesArray.filter(value => value.modules.includes('docker'));
console.log(filterDocker);