

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
    var prova = valoreUtente + valoreKm + valoreEta;
    var prezzoBase = cadKm * valoreKm;
    var prezzoTotale;
    if (etaUtente <= 17){
      prezzoTotale = prezzoBase * 0.2;
    } else if (etaUtente >= 65){
      prezzoTotale = prezzoBase * 0.4;
    }
    document.getElementById('prezzotot').innerHTML = prezzoTotale;
    console.log("prezzo base del biglietto" + prezzoBase);
    document.getElementById('passeggero').innerHTML = "nome utente" + valoreUtente;


  }

)



//stampare prezzo in base ai dati inseriti

//annullare dati inseriti
