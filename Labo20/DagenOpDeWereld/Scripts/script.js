const setup = () => {
    const geboorteDatum = new Date("2006-06-29");
    const vandaag = new Date();

    const verschil = vandaag - geboorteDatum;
    const dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));

    console.log("Aantal dagen sinds geboorte: " + dagen);

}

window.addEventListener("load", setup);

