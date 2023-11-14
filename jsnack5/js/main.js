'use strict';

// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

// creo una variabile N che prende con prompt un numero dall'utente

const N = +prompt('inserisci un numero');

// l'N passato dall'utente lo uso come variabile del ciclo for per creare N array

for (let i = 0; i < N; i++) {
  let arrayCreated = [];

  // per assegnare 10 numeri casuali all'array faccio un for che cicla fino a 10 dove ad ogni ciclo asegna un valore all'array n in quella posizione

  for (let j = 0; j < 10; j++) {
    let randNum = Math.floor(Math.random() * 100) + 1;
    arrayCreated.push(randNum);
  }

  //stampo a schermo.
  alert(`Array ${i}: ${arrayCreated}`);
  console.log(arrayCreated);
}
