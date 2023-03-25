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

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);