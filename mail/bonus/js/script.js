/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina. */

//lista degli utenti
const guestList = ["maurizio" , "boolean@libero.it"];
//contenitore per l'esito 
const result = document.querySelector("#result")
// di base found è falso


const listener = document.querySelector("#button");

listener.addEventListener("click",
    
    function() {
        let email = document.querySelector('input[type="text"]')
        let userMail = email.value
        console.log(userMail);
        let found = 0; 
        
        //confronto l'email dell'utente con quelle della lista
        for (let i = 0; i < guestList.length; i++ ){
            let subscribers = guestList[i];

            if (subscribers == userMail) {
                //controllo se la mail corrisponde. Se corrisponde trasformo found da falso a vero
                found = 1;
            }
        }
            
        if (found) { //found è vero? //questa è la forma contratta di found === true o found === 1
            //se corrisponde scrivo sei in lista
            result.innerHTML = "sei in lista";
        } else {
            // se l'utente non è in lista gli dico: "non sei in lista
            result.innerHTML = "non sei in lista";
        }
                
        }
)

