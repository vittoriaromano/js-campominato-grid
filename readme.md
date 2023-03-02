1) Consegna:

- L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//creare un bottone /
//creare la grida e nasconderla/
//al click del bottone si mostrera' la gligia 
  //la griglia sara' un elemento integrato nel css grazie alla funzione js di js


- Ogni cella ha un numero progressivo, da 1 a 100.
// aggiungiamo un index <= a 100 /


- Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// calcolo che va fatto nel css con la width /


- Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// creamo un'altro event listner al click della cella
//al click cambiamo una classe colore e console.log la proprieta html



*BONUS*

Aggiungere una select accanto al bottone di generazione,
che fornisca una scelta tra tre diversi livelli di difficoltà:
// nell html Aggiungere una select accanto al bottone di generazione, con tre options


//mettere una funzione che cambia l'index in corrispondenza del option scelta


con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
//lascia il codice come e

con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// cambiare l'index 

con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// cambiare l'index





const inputAgeValue = inputAge.value;

if(inputAgeValue === 'underage') { //true
        ticketPrice = ticketPrice * 0.8; //20% sconto
        message = 'Sconto minorenne';
    } else if(inputAgeValue === 'over'){
        ticketPrice = ticketPrice * 0.6; //40% sconto
        message = 'Sconto over';
    } 