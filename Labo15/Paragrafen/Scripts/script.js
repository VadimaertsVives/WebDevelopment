const setup = () => {
    let paragrafen = document.getElementsByClassName("belangrijk");

    for (let el of paragrafen) {
        el.className += " opvallend";
    }
}

window.addEventListener("load", setup);