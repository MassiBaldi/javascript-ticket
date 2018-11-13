//chiedo l'età all'utente
var age = prompt('Quanti anni hai?');
//chido all'utente quanti km farà
var km = prompt('Quanti km fari nella tua tratta?');
//calcolo il prezzo del biglietto
var prezzo = km * 0.21;
//dico all'utente il prezzo
document.getElementById('costo').innerHTML = 'Il prezzo del tuo biglietto è di € ' + prezzo;
// applico lo sconto ai minorenni
if (age < 18) {
  var sconto_minori = prezzo - (prezzo * 0.2);
  document.getElementById('costo_minori').innerHTML = 'essendo minorenne hai uno sconto del 20% quindi il prezzo è di € ' + sconto_minori;
}
else {

}
// applico sconto over 65 anni
if (age >= 65) {
  var sconto_over65 = prezzo - (prezzo * 0.4);
  document.getElementById('sconto_over65').innerHTML = 'avendo più di 65 anni hai uno sconto del 40% quindi il prezzo è di € ' + sconto_over65;
}
else {

}
