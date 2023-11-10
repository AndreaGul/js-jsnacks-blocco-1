'use strict';

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parUtente1 = prompt('inserisci parola');
const parUtente2 = prompt('inserisci parola');

if (parUtente1.length > parUtente2.length) {
  console.log(
    `la parola dell'utente 1 (${parUtente1}) è più lunga di quella dell'utente 2 (${parUtente2})`
  );
} else if (parUtente1.length < parUtente2.length) {
  console.log(
    `la parola dell'utente 1 (${parUtente1}) è più corta di quella dell'utente 2 (${parUtente2})`
  );
} else {
  console.log(
    `le due (${parUtente1}) e (${parUtente2}) parole hanno la stessa lunghezza`
  );
}
