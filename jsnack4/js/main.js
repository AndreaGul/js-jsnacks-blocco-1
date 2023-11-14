'use strict';

// Crea un array vuoto
const num = [];

//chiedi all’utente un numero da inserire nell’array.

// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.

// let numSum = 0;

// for (let i = 0; numSum < 50; i++) {
//   num[i] = Number(prompt('inseirsci un numero'));
//   console.log(num[i]);

//   numSum += num[i];
// }
// console.log(numSum);

// let numSum = 0;
// let i = 0;
// while (numSum < 50) {
//   num[i] = Number(prompt('inseirsci un numero'));
//   console.log(num[i]);

//   numSum += num[i];
//   i++;
// }
// console.log(numSum);

let numSum = 0;
let i = 0;
do {
  num[i] = Number(prompt('inseirsci un numero'));
  console.log(num[i]);

  numSum += num[i];
  i++;
} while (numSum < 50);

console.log(numSum);
