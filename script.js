"use strict";

const num = '50';

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Big')
// } else {
//     console.log('Ok!')
// }
//
// (num === 50) ? console.log('Ok!') : console.log('Error');

switch (num) {
    case '49':
        console.log('неверно')
        break;
    case '100':
        console.log('неверно')
        break;
    case '50':
        console.log('Ok')
        break;
    default:
        console.log('не в этот раз')
        break;
}
