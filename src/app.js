"use strict";
let punteggio = 0;
const punteggioMin = 6;
const risultato = document.getElementById("risultato");
const risposteOk = document.getElementsByClassName("rispOk");
const risposteErr = document.getElementsByClassName("rispErr");
function aggiornaRisultati() {
    if (punteggio >= punteggioMin) {
        risultato.textContent = "Sei un ottimo mago! Hai superato il quiz con " + punteggio + " punti";
        risultato.style.color = "green";
    }
    else {
        risultato.textContent = "Non hai superato il quiz, sei un babbano";
        risultato.style.color = "red";
    }
}
// Bottoni risposta corretta
for (let i = 0; i < risposteOk.length; i++) {
    const button = risposteOk[i];
    button.addEventListener("click", function () {
        punteggio++;
        button.style.backgroundColor = "green";
        aggiornaRisultati();
    });
}
// Bottoni risposta sbagliata
for (let i = 0; i < risposteErr.length; i++) {
    const button = risposteErr[i];
    button.addEventListener("click", function () {
        button.style.backgroundColor = "red";
        //Colora l'altlo bottone corretto di verde 
        const parent = button.parentElement;
        if (parent) {
            const correctBtn = parent.querySelector(".rispOk");
            if (correctBtn) {
                correctBtn.style.backgroundColor = "green";
            }
        }
        aggiornaRisultati();
    });
}
aggiornaRisultati();
