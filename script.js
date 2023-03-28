// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive : D');

// const interface = 'Audio';

// function

// function logger() {
//     console.log('I can drive : D');

// }

// // calling /running  / invoking  functions
// logger();
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const applePorangeJuice = fruitProcessor(2, 4);
// console.log(applePorangeJuice);


// const num = Number('23');


// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2)

//arrow

// const calAge3 =birthYear => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = birthYear =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1991))


// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return`${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// function calling other function

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges, ) {
//     const applePieces = cutFruitPieces( apples);
//     const orangePieces = cutFruitPieces( oranges);

//     // const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
//     return juice;
// }


// console.log(fruitProcessor(2,3));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {

//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {

//         console.log(`${firstName}  retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName}  has alredy retirement`);
//         return -1;
//     }

// }


// console.log(yearsUntilRetirement(1991, 'Jonas'))
// console.log(yearsUntilRetirement(1970, 'Mike'))

// Coding Challenge #1



// function calcAverage(score1, score2, score3) {
//     return (score1 + score2 + score3)/3
// }

// // console.log(calcAverage(44, 23, 71));
// // console.log(calcAverage(85,54,41))

// console.log(10,20,30)
// 1.

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3
// }
// console.log(calcAverage(44, 23, 71));
// console.log(calcAverage(65, 54, 49))

// const checkWinner = (avgDolhins, avgKoalas) => {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(` Dolhins Win (${avgDolhins} vs. ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`  Koalas Win (${avgKoalas} vs. ${avgDolhins})`)
//     } else {
//         console.log(` No team wins! `)
//     }

// }
// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49))

//Array

// const friend1 = 'Michael';
// const friend2 = 'Steven';;
// const Peter = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const year = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'
// console.log(friends);

// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1911, 'teacher', friends];

// console.log(jonas);

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// // console.log(calcAge(years));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);


//add element in array
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLenth = friends.push('jay');
// console.log(friends)
// console.log(newLenth)

// friends.unshift('John');
// console.log(friends);

// //remove element in array

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));


// bills = [125, 555, 44];
// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * .15;
//         return tip;
//     } else {
//         const tip = bill * .20;
//         return tip;
//     }

// }

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(calcTip(100));


// tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);
// console.log(bills, tips);

// const totalValue = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

// console.log(totalValue);


// object

const jonasArray = [
    'jonas',
    'Schmedtmann',
    2037 - 1911,
    'teacher' ['Michael', 'Peter', 'Steven']
];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1911,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']

// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);


// const nameKey = 'Name';
// console.log(jonas['firstName' + nameKey]);
// console.log(jonas['last' + nameKey]);

// console.log(jonas.
//     'last' + nameKey)


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1911,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

// calcAge: function(birthYear) {
//     return 2037 - birthYear;
// }

//     calcAge: function() {
//         console.log(this);
//         return 2037 - this.birthYear;
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));


// console.log('Lift weights repetitioon');
// console.log('Lift weights repetitioon');
// console.log('Lift weights repetitioon');
// console.log('Lift weights repetitioon');
// console.log('Lift weights repetitioon');
// console.log('Lift weights repetitioon');


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lift weights repetition ${rep}`);
// }

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];


// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     types.push(typeof jonas[i]);

// }

// console.log(types);


// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember:  
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and

// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

// BMI = mass / height ** 2

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }

// }

// const john = {
//     fullName: 'John Smithr',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }


// }
// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`)
// }


//dice
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);


// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end');
// }


// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];
const calcTip = (bill) => {
        if (bill >= 50 && bill <= 300) {
            const tip = bill * .15;
            return tip;
        } else {
            const tip = bill * .20;
            return tip;
        }
    }
    // consnt totalValue = bill[] + tip[];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);

}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));