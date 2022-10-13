// /*Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.*/




// let nomePasseggero;
// let distanzaDaPercorrere;
// let etaPasseggero;
// const prezzo1Km = 0.21;
// const scontoUnder18 = 0.2;
// const scontoOver65 = 0.4;
// let prezzoScontato;
// let prezzoSenzaSconti = prezzo1Km * distanzaDaPercorrere; 
// const btnInput = document.getElementById("btn-input");
// btnInput.addEventListener("click", function(){
//    nomePasseggero =  document.getElementById("name").value;
//    distanzaDaPercorrere = document.getElementById("km").value;
//    etaPasseggero = document.getElementById("age").value;
// })

// if(etaPasseggero === "under18"){
//     prezzoScontato = prezzoSenzaSconti * (1 - scontoUnder18);
// }else if(etaPasseggero === "over65"){
//     prezzoScontato = prezzoSenzaSconti + (1 - scontoOver65);
// }else{
//     prezzoScontato = prezzoSenzaSconti;
// }



// document.getElementById("output").innerHTML = `

// ciao ${nomePasseggero},  

// il tuo biglietto costa ${prezzoScontato.toFixed(2)}€

// `


// ELEMENTI

const btnGenera = document.getElementById("genera");
const btnReset = document.getElementById('annulla');


// input
const inputName = document.getElementById("name");
const inputKm = document.getElementById("km");
const inputRange = document.getElementById("age");

// output
const outputName = document.getElementById('outputName');
const outputOffer = document.getElementById('outputOffer');
const outputCoach = document.getElementById('outputCoach');
const outputCP = document.getElementById('outputCP');
const outputPrice = document.getElementById('outputPrice');
const ticketBox = document.querySelector('.ticket');

// DATI

let passengerName, totalKm, ageRange, totalPrice, coach, code;
const juniorDiscount = 0.2;
const seniorDiscount = 0.4;
const priceForKm = 0.21;


// EVENTI

btnGenera.addEventListener("click", function(){
    passengerName = inputName.value;
    totalKm = inputKm.value;
    ageRange = inputRange.value;
    coach = Math.ceil(Math.random() * 12);
    code = Math.floor(Math.random() * (999999 - 100000) +1) + 100000;
    totalPrice = totalKm * priceForKm;

    let labelOffer = 'Biglietto standard'

    // calcolo sconto
    if(ageRange === 'under18'){
        totalPrice = totalPrice * (1 - juniorDiscount)
        labelOffer = 'Sconto junior';
    }else if(ageRange === 'over65'){
        totalPrice = totalPrice * (1 - seniorDiscount)
        labelOffer = 'Sconto senior';
    }

    outputName.innerHTML = passengerName;
    outputOffer.innerHTML = labelOffer;
    outputCoach.innerHTML = coach;
    outputCP.innerHTML = code;
    outputPrice.innerHTML = totalPrice.toFixed(2);

    // ticketBox.classlist.remove('hide');
});


btnReset.addEventListener('click', function(){
    inputName.value = '';
    inputKm.value = '';
    inputRange = '';

    // ticketBox.classlist.add('hide');
})