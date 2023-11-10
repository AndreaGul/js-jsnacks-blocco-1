'use strict';

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

//creo due variabili che chiedono all'utente una parola
const parUtente1 = prompt('inserisci parola');
const parUtente2 = prompt('inserisci parola');

//paragono la lunchezza delle due parole
//se la prima e più lunga della seconda
if (parUtente1.length < parUtente2.length) {
  console.log(
    `la parola dell'utente 1 (${parUtente1}) è più corta di quella dell'utente 2 (${parUtente2})`
  );
}
//altrimennti se la prima e più corta della seconda
else if (parUtente2.length < parUtente1.length) {
  console.log(
    `la parola dell'utente 2 (${parUtente2}) è più corta di quella dell'utente 1 (${parUtente1})`
  );
}
//alrimenti se sono uguali
else {
  console.log(
    `le due (${parUtente1}) e (${parUtente2}) parole hanno la stessa lunghezza`
  );
}
