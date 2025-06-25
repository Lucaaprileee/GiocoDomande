
let punteggio: number = 0;
const punteggioMin: number = 6;

const rispostaOkButton = document.getElementById("rispOk") as HTMLButtonElement;
const rispostaErrButton = document.getElementById("rispErr") as HTMLButtonElement;
let risultatoQuiz = document.getElementById("risultatoQuiz") as HTMLDivElement;

// Funzione per aggiornare il messaggio del risultato
function updateResult(): void {
    if (punteggio >= punteggioMin) {
        risultatoQuiz.textContent = "Sei un ottimo mago! Hai superato il quiz con " + punteggio + " punti";
        risultatoQuiz.style.color = "green"; 
    } else {
        risultatoQuiz.textContent = `Non hai superato il quiz, sei un babbano`;
        risultatoQuiz.style.color = "red"; 
    }
}

// risposta CORRETTA
if (rispostaOkButton) { 
    rispostaOkButton.addEventListener("click", () => {
        punteggio++; 
        rispostaOkButton.style.backgroundColor = "green"; 
        updateResult(); 
    });
}

// risposta SBAGLIATA
if (rispostaErrButton) { 
    rispostaErrButton.addEventListener("click", () => {
        rispostaErrButton.style.backgroundColor = "red";

        
        if (rispostaOkButton) {
            rispostaOkButton.style.backgroundColor = "green";
        }
        updateResult(); 
    });
}

updateResult();