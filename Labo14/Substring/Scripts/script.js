const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let input = document.getElementById("txtWoord").value;
    let start = document.getElementById("txtStart").value;
    let einde = document.getElementById("txtEinde").value;

    let output = document.getElementById("txtOutput");
    output.innerHTML = input.substring(start, einde);
}

window.addEventListener('load', setup)