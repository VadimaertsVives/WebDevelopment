const setup = () => {
    let knop = document.getElementById("btnWijzig");
    knop.addEventListener("click", wijzigTekst);
}

const wijzigTekst = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}

window.addEventListener("load", setup);
