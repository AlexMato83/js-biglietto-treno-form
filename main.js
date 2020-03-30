

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

//creazione var per disabilitare sezione BIGLIETTO
var biglietto = document.getElementById('sez2');

//inizio bottone CALCOLO
bottoneCalcolo.addEventListener("click",
  function(){

    var valoreUtente = nomeUtente.value;
    var valoreKm = kmDaPercorrere.value;
    var valoreEta = etaUtente.value;
    biglietto.style.display = "block";
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
    prezzoTotale.toFixed(2);
    var numCarrozza = Math.floor(Math.random() * 25);
    var numCodice = Math.floor(Math.random() * 25849);
    document.getElementById('codice').innerHTML = numCodice;
    document.getElementById('carrozza').innerHTML = numCarrozza;
    document.getElementById('categoria').innerHTML = categoriaBigl;
    console.log("Prezzo totale : " + prezzoTotale);
    document.getElementById('prezzotot').innerHTML = prezzoTotale + " Euro";
    console.log("prezzo base del biglietto" + prezzoBase);
    document.getElementById('passeggero').innerHTML = valoreUtente;

  }
)

bottoneAnnulla.addEventListener("click",
  function(){
    nomeUtente.value = " ";
    kmDaPercorrere.value = " ";
    etaUtente.value = " ";
    biglietto.style.display = "none";
  }
)




//stampare prezzo in base ai dati inseriti

//annullare dati inseriti
