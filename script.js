// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive : D');

// const interface = 'Audio';

// function

function logger() {
    console.log('I can drive : D');

}

// calling /running  / invoking  functions
logger();
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const applePorangeJuice = fruitProcessor(2, 4);
console.log(applePorangeJuice);


const num = Number('23');