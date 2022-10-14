// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.


const parolaUtente = prompt("dimmi una parola")
console.log(parolaUtente);

isPalindroma = parolaUtente
console.log(isPalindroma)

let boolenValue = false

function reverString(isPalindroma){

    let splitString = isPalindroma.split("")
    console.log(splitString)

    let reverseString = splitString.reverse("")
    console.log(reverseString)

    let joinString = reverseString.join("")
    console.log(joinString)
    result = joinString
}


let nuovaStringa = reverString(isPalindroma)
console.log(nuovaStringa)
