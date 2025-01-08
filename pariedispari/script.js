
// 1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let sceltaUtente = prompt('Scegli pari o dispari');
let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
// alert nel caso in cui l'utente non inserisca un numero da 1 a 5 o non scelga tra pari e dispari
if (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari' && sceltaUtente !== 'Dispari' && sceltaUtente !== 'Pari') {
    alert('Devi scegliere tra pari e dispari');
    sceltaUtente = prompt('Scegli pari o dispari');
}
if (numeroUtente < 1 || numeroUtente > 5) {
    alert('Devi inserire un numero da 1 a 5');
    numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
}
console.log('scelta utente:', sceltaUtente);
console.log('numero utente:', numeroUtente);

// 2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let numeroComputer = numeroRandom(1, 5);
console.log('numero computer:', numeroComputer);

// 3. Sommiamo i due numeri
let somma = numeroUtente + numeroComputer;
console.log('somma:', somma);

// 4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariDispari(numero) {
    if (numero % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}
let risultato = pariDispari(somma);
console.log('risultato:', risultato);