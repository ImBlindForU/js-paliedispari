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

const numeroUtente = parseInt(prompt("scegli un numero da 1 a 5")) 

let numberU = numeroUtente
console.log(numberU)

function randomNumberPc(max, min) {
    let generateNumber =  Math.floor(Math.random() * (max - min + 1) ) + min;
    return generateNumber;
    
}
let resultNumber = randomNumberPc(5, 1)
console.log(resultNumber)

let sum = resultNumber + numberU
console.log(sum)

function decidere(){
    let message =""
    if (sum % 2 === 0){
        
        message = "pari"
    } else {
        
        message = "dispari"
    }
    return message
}

result = decidere()
console.log(result)

if (result ===  pariDispariUtente){
    finalMessage = "utente vince"
} else {
    finalMessage ="Pc vince"
}

console.log(finalMessage)