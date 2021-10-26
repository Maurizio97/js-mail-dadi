/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */


// chiedo all'utente di lanciare il dado
const userDice = parseInt(prompt("Scrivi '1' per lanciare il dado"))

let dice = document.querySelector("#dices")
console.log(userDice);

if (userDice){
    //dado utente
    const userDice = Math.floor(Math.random() * 6 + 1);
    dice.innerHTML =`${userDice}`
    console.log("dado user", userDice);
    //dado cpu
    const cpuDice = Math.floor(Math.random() * 6 + 1);
    console.log("dado cpu", cpuDice);
    dice.innerHTML =`${cpuDice}`
}

    
    