let punteggio: number = 0;
const punteggioMin: number = 6;
const risultato = document.getElementById("risultato") as HTMLParagraphElement;
const risposteOk = document.getElementsByClassName("rispOk") as HTMLCollectionOf<HTMLButtonElement>;
const risposteErr = document.getElementsByClassName("rispErr") as HTMLCollectionOf<HTMLButtonElement>;

let risposteDate: number = 0;
const totDomande: number = risposteOk.length;

function aggiornaRisultati(): void {
    if (risposteDate === totDomande) {
        if (punteggio >= punteggioMin) {
            risultato.textContent = "Sei un ottimo mago! Hai superato il quiz con " + punteggio + "/10 punti";
            risultato.style.color = "#2ecc71";
        } else {
            risultato.textContent = "Non hai superato il quiz, sei un babbano";
            risultato.style.color = "#ff0026";
        }
        risultato.style.display = "block";
    } else {
        risultato.style.display = "none";
    }
}

// Bottoni risposta corretta
for (let i = 0; i < risposteOk.length; i++) {
    const button = risposteOk[i];

    button.addEventListener("click", function () {
        if (!button.disabled) { 
            punteggio++;
            risposteDate++;
            button.style.backgroundColor = "#2ecc71";
            
            aggiornaRisultati();
        }
    });
}

// Bottoni risposta sbagliata
for (let i = 0; i < risposteErr.length; i++) {
    const button = risposteErr[i];

    button.addEventListener("click", function () {
        if (!button.disabled) { 
            risposteDate++;
            button.style.backgroundColor ="#ff0026";

            aggiornaRisultati();
        }
    });
}

aggiornaRisultati();
