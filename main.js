

//inserire nome
var nomeUtente = document.getElementById('nome');
//inserire km da percorrere
var kmDaPercorrere = document.getElementById('km');
//inserire età
var etaUtente = document.getElementById('eta');

//collegare il bottone calcolo
var bottoneCalcolo =document.getElementById('calcolo');



bottoneCalcolo.addEventListener("click",
  function(){
    var valoreUtente = nomeUtente.value;
    var valoreKm = kmDaPercorrere.value;
    var valoreEta = etaUtente.value;
    var prova = valoreUtente + valoreKm + valoreEta;
    console.log(prova);
    document.getElementById('passeggero').innerHTML = valoreUtente;

  }

)



//stampare prezzo in base ai dati inseriti

//annullare dati inseriti
