const setup = () => {
    let elementen = document.getElementsByClassName("belangrijk");

    for (let el of elementen) {
        el.className += " opvallend";
    }
}

window.addEventListener("load", setup);