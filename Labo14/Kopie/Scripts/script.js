const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieerTekst);
}

const kopieerTekst = () => {
    let input = document.getElementById("txtInput").value;
    let output = document.getElementById("txtOutput");

    output.innerText = input;
}

window.addEventListener('load', setup);