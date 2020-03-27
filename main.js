

//inserire nome
var nomeUtente = document.getElementById('nome');
//inserire km da percorrere
var kmDaPercorrere = document.getElementById('km');
//inserire età
var etaUtente = document.getElementById('eta');


//collegare il bottone calcolo
var bottoneCalcolo =document.getElementById('calcolo');
//collegare il bottone annullare
var bottoneAnnulla = document.getElementById('annulla');

//valore del chilometro ,CAD
var cadKm = 0.30;

//valore base del biglietto esente sconti

//creazione del var per la categoria del biglietto
var categoriaBigl;

//inizio bottone CALCOLO
bottoneCalcolo.addEventListener("click",
  function(){

    var valoreUtente = nomeUtente.value;
    var valoreKm = kmDaPercorrere.value;
    var valoreEta = etaUtente.value;
    var prezzoBase = cadKm * valoreKm;
    var prezzoTotale;
    if (valoreEta <= 17){
      prezzoTotale = prezzoBase - (prezzoBase * 0.2);
    } else if (valoreEta >= 65){
      prezzoTotale = prezzoBase - (prezzoBase * 0.4);
    } else {
      prezzoTotale = prezzoBase;
    }
    if (valoreEta <= 17){
      categoriaBigl = "Riduzione Minorenni";
    } else if (valoreEta >= 65){
      categoriaBigl = "Riduzione Over 65";
    } else {
      categoriaBigl = "Biglietto Standard";
    }
    var numCarrozza = Math.floor(Math.random() * 25);
    var numCodice = Math.floor(Math.random() * 25849);
    document.getElementById('codice').innerHTML = "il codice è " + numCodice;
    document.getElementById('carrozza').innerHTML = "il numero carrozza è " + numCarrozza;
    document.getElementById('categoria').innerHTML = "la categoria a cui appartieni è " + categoriaBigl;
    console.log("Prezzo totale : " + prezzoTotale);
    document.getElementById('prezzotot').innerHTML = "prezzo totale del biglietto " + prezzoTotale;
    console.log("prezzo base del biglietto" + prezzoBase);
    document.getElementById('passeggero').innerHTML = "nome utente" + valoreUtente;


  }

)
bottoneAnnulla.addEventListener("click",
  function(){
    nomeUtente.value = " ";
    kmDaPercorrere.value = " ";
    etaUtente.value = " ";
  }
)




//stampare prezzo in base ai dati inseriti

//annullare dati inseriti
