// 1 chiedere all'utente il numero di chilometri da fare e la sua età
const km = prompt ( "quanti km vuoi percorrere?")
const age = prompt ("quanti anni hai?")

//2 calcolare il prezzo del biglietto in bvase ai km da percorrere"

const priceForKm = 0.21;
let price = km * priceForKm;

//3 applicare uno sconto del 20% se il passegero è minorenne o del 40% se il passegero è over 65

if (age <=18) {
    price -= price * 0.20;
}

if (age >= 65){
    price -= price * 0.40;
}

//prezzo finale arrontomdato a due decimali
alert(`il prezzo del biglietto è: €${price.toFixed(2)}`)