

//inserire nome
var nomeUtente = document.getElementById('nome');
//inserire km da percorrere
var kmDaPercorrere = document.getElementById('km');
//inserire età
var etaUtente = document.getElementById('eta');


//collegare il bottone calcolo
var bottoneCalcolo =document.getElementById('calcolo');

//valore del chilometro ,CAD
var cadKm = 0.30;

//valore base del biglietto esente sconti




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
    console.log("Prezzo totale : " + prezzoTotale);
    document.getElementById('prezzotot').innerHTML = prezzoTotale;
    console.log("prezzo base del biglietto" + prezzoBase);
    document.getElementById('passeggero').innerHTML = "nome utente" + valoreUtente;


  }

)



//stampare prezzo in base ai dati inseriti

//annullare dati inseriti
