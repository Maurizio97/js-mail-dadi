/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */


// chiedo all'utente di lanciare il dado
const userDice = parseInt(prompt("Scrivi '1' per lanciare il dado"));
//selezione div contenitore
let dice = document.querySelector("#dices");
//creazione div contenitore per le successive variabili
let divCont = document.createElement("div");

if (userDice){
    //dado utente
    const userDice = Math.floor(Math.random() * 6 + 1);
    divCont.append(`Dado user: ${userDice}`);
    dice.append(divCont);

    //dado cpu
    const cpuDice = Math.floor(Math.random() * 6 + 1);
    divCont.append(`Dado cpu: ${cpuDice}`); 
    dice.append(divCont);

    if (userDice === cpuDice){
        //avete pareggiato
        let divCont = document.createElement("div");
        divCont.append("Avete pareggiato!");
        dice.append(divCont);

    } else if (userDice < cpuDice) {
        //hai perso
        let divCont = document.createElement("div");
        divCont.append("Hai perso!");
        dice.append(divCont);

    } else if (userDice > cpuDice) {
        //hai vinto
        let divCont = document.createElement("div");
        divCont.append("Hai vinto!");       
        dice.append(divCont);  
    }
   
}


    
    