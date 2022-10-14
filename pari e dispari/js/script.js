// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const sceltaUtente = prompt("scegli se pari o dispari");

let pariDispariUtente = sceltaUtente
if (pariDispariUtente === "pari"){
    pariDispariPc = "dispari"
} else{
    pariDispariPc = "pari"
}

console.log(pariDispariUtente)
console.log(pariDispariPc)

const numeroUtente = prompt("scegli un numero da 1 a 5");

let numberU = numeroUtente

function randomNumberPc(max, min) {
    let generateNumber =  Math.floor(Math.random() * (max - min + 1) ) + min;
    return generateNumber;
    
}
let resultNumber = randomNumberPc(1, 5)
console.log(randomNumberPc)

