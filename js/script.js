/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.*/




let nomePasseggero;
let distanzaDaPercorrere;
let etaPasseggero;
const prezzo1Km = 0.21;
const scontoUnder18 = 0.2;
const scontoOver65 = 0.4;
let prezzoScontato;
let prezzoSenzaSconti = prezzo1Km * distanzaDaPercorrere; 
const btnInput = document.getElementById("btn-input");
btnInput.addEventListener("click", function(){
   nomePasseggero =  document.getElementById("name").value;
   distanzaDaPercorrere = document.getElementById("km").value;
   etaPasseggero = document.getElementById("age").value;
})

if(etaPasseggero === "under18"){
    prezzoScontato = prezzoSenzaSconti * (1 - scontoUnder18);
}else if(etaPasseggero === "over65"){
    prezzoScontato = prezzoSenzaSconti + (1 - scontoOver65);
}else{
    prezzoScontato = prezzoSenzaSconti;
}



document.getElementById("output").innerHTML = `

ciao ${nomePasseggero},  

il tuo biglietto costa ${prezzoScontato.toFixed(2)}€

`

