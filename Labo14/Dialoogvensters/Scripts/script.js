const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
}

// 1. alert
alert("Dit is een alert venster!");

// 2. confirm
let antwoordConfirm = confirm("Klik op OK of Cancel");
console.log("Return value confirm:", antwoordConfirm);

// 3. prompt
let antwoordPrompt = prompt("Typ hier iets:");
console.log("Return value prompt:", antwoordPrompt);




window.addEventListener("load", setup);