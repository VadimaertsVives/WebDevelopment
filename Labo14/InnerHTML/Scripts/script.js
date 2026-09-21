const setup = () => {
    let knop = document.getElementById("btnWijzig");
    knop.addEventListener("click", wijzig);
}

const wijzig = () => {
    let tekst = document.getElementById("txtOutput");
    tekst.innerHTML = "Welkom!";
}

window.addEventListener("load", setup);