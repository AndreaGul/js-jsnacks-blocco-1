'use strict';

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let sum = 0;

for (let i = 0; i < 10; i++) {
  //chiedo all'utente il numero
  const num = Number(prompt(`Inserisci il tuo ${i}  numero`));
  console.log(`numero inserito= ${num}`);

  //controllo se num è un numero
  if (!isNaN(num)) {
    //inserisco il valore in una variabile somma
    //sommo il valore di somma con l'altro numero che l'utente ci ha dato
    sum += num;
    console.log(`la somma fino ad ora ${sum}`);
  }
  // nel caso non fosse un numero il valore non viene sommato
  else {
    console.log('hai inserito un valore non numerico');
  }
}

//stampo la somma

console.log(sum);
