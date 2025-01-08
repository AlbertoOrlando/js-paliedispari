
// chiedo all'utente di inserire una parola
let parola = prompt('Inserisci una parola');

// creo una funzione che mi permette di capire se la parola inserita è palindroma
function palidroma(parola) {
    let parolaInversa = '';
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInversa = parolaInversa + parola[i];
        
    }
    if (parola == parolaInversa) {
        return 'La parola è palidroma';
    } else {
        return 'La parola non è palidroma';
    }
}
console.log(palidroma(parola));
