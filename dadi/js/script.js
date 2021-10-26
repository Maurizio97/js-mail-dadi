/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */


// chiedo all'utente di lanciare il dado
const userDice = parseInt(prompt("Scrivi '1' per lanciare il dado"))
console.log(userDice);



for (let i = 1; i >= 6; i++) {


}

if (userDice){
    const userDice = Math.floor(Math.random() * 6 + 1);
    console.log("dado user", userDice);
}

    const cpuDice = Math.floor(Math.random() * 6 + 1);
    console.log("dado cpu", cpuDice);
    