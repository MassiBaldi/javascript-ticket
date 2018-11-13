//chiedo l'età all'utente
var age = prompt('Quanti anni hai?');
//chido all'utente quanti km farà
var km = prompt('Quanti km farai nella tua tratta?');
//calcolo il prezzo del biglietto
var prezzo = km * 0.21;
//dico all'utente il prezzo
if (age && km) {
document.getElementById('costo').innerHTML = 'Il prezzo del tuo biglietto è di ' + prezzo +'€';
}
else {
document.getElementById('costo').innerHTML = 'Per sapere il prezzo del biglietto è obbligatorio compilare entrambi i campi';
}
// applico lo sconto ai minorenni
if ((age < 18)&&(age && km)) {
  var sconto_minori = prezzo * 0.8;
  var sconto_minori=Math.round(sconto_minori*100)/100;
  document.getElementById('costo_minori').innerHTML = 'Essendo minorenne hai uno sconto del 20% quindi il prezzo è di ' + sconto_minori +'€';
}
// applico sconto over 65 anni
if (age >= 65) {
  var sconto_over65 = prezzo * 0.6;
  var sconto_over65=Math.round(sconto_over65*100)/100;
  document.getElementById('sconto_over65').innerHTML = 'Avendo più di 65 anni ha uno sconto del 40% quindi il prezzo è di ' + sconto_over65 +'€';
}
