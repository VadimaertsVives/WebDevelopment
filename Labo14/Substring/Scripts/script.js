const setup = () => {
    let knop = document.getElementById("btnSubstring");
    knop.addEventListener("click", toonSubstring);
}

const toonSubstring = () => {
    let woord = document.getElementById("txtWoord").value;
    let start = document.getElementById("txtStart").value;
    let einde = document.getElementById("txtEinde").value;

    let resultaat = woord.substring(start, einde);

    document.getElementById("txtOutput").innerHTML = resultaat;
}

window.addEventListener("load", setup);