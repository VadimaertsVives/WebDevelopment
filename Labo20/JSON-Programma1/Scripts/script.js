const setup = () => {
    let student1 = {
        voornaam: "Vadim",
        familienaam: "Aerts",
        geboorteDatum: new Date("2006-06-29"),
        adres: {
            straat: "Beveren Dries 103",
            postcode: "8791",
            gemeente: "Waregem"
        },
        isIngeschreven: true,
        namenVanVrienden: ["Ruben", "Anthony", "Loic"],

        aantalAutos: 2

    };

    let jsonString = JSON.stringify(student1);

    console.log(jsonString);
}

window.addEventListener("load", setup);