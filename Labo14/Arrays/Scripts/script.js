const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
}

// Maak een array met namen van familieleden aan
let familieLeden = ['mama', 'papa', 'Quentin', 'Océane', 'Vadim'];

// Schrijf naar de console hoeveel elementen de array bevat
console.log(familieLeden.length);

// Schrijf het eerste, derde en vijfde element uit de array naar de console
console.log(familieLeden[0]);
console.log(familieLeden[2]);
console.log(familieLeden[4]);

//
function VoegNaamToe(lijst) {
    let nieuweNaam = prompt("extra naam:");
    lijst.push(nieuweNaam);
}
VoegNaamToe(familieLeden);
console.log(familieLeden);

let familieString = familieLeden.join(", ");
console.log(familieString);

window.addEventListener("load", setup);