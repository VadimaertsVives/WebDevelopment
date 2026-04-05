const setup = () => {
    let jsonString = `{"voornaam":"Vadim","familienaam":"Aerts","geboorteDatum":"2006-06-29T00:00:00.000Z",
                            "adres":{"straat":"Beveren Dries 103","postcode":"8791","gemeente":"Waregem"},
                            "isIngeschreven":true,"namenVanVrienden":["Ruben","Anthony","Loic"],"aantalAutos":2}`;

    let student2 = JSON.parse(jsonString);

    console.log(student2.voornaam);
}

window.addEventListener("load", setup);