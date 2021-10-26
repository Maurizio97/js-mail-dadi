/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina. */


//lista degli utenti
const guestList = ["maurizio" , "boolean@libero.it"];
//contenitore per l'esito 
const result = document.querySelector("#result")
//chiedo all'utente la sua email
const userMail = prompt("Scrivimi la tua mail");

let found = 0;

//confronto l'email dell'utente con quelle della lista
for (let i = 0; i < guestList.length; i++ ){
    let subscribers = guestList[i];

    if (subscribers == userMail) {
        //controllo se la mail corrisponde 
        found = 1;
    }
}

if (found) {
    //se corrisponde scrivo sei in lista
    console.log("Matching strings!");
    result.innerHTML = "sei in lista";
} else {
    // se l'utente non è in lista gli dico: "non sei in lista
    result.innerHTML = "non sei in lista";
}
   

