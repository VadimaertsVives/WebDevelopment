const setup = () => {
    let knoppen = document.getElementsByClassName("kleurknop");

    for (let knop of knoppen) {
        knop.addEventListener("click", wisselKleur);
    }
};

const wisselKleur = (event) => {
    let knop = event.target;

    if (knop.className.includes("blauw")) {
        knop.className = "kleurknop";      // terug naar wit
    } else {
        knop.className = "kleurknop blauw"; // blauw maken
    }
};

window.addEventListener("load", setup);