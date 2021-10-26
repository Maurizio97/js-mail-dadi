/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */


// chiedo all'utente di lanciare il dado
const userDice = parseInt(prompt("Scrivi '1' per lanciare il dado"));

let dice = document.querySelector("#dices");
console.log(userDice);
let divCont = document.createElement("div");
dice.append(divCont);

if (userDice){
    //dado utente
    const userDice = Math.floor(Math.random() * 6 + 1);
    divCont.append(`Dado user: ${userDice}`);

    //dado cpu
    const cpuDice = Math.floor(Math.random() * 6 + 1);
    divCont.append(`Dado cpu: ${cpuDice}`); 

    if (userDice === cpuDice){
        //avete pareggiato
        divCont.append("Avete pareggiato!");

    } else if (userDice < cpuDice) {
        //hai perso
        divCont.append("Hai perso!");

    } else if (userDice > cpuDice) {
        //hai vinto
        divCont.append("Hai vinto!");       
    }
   
}


    
    