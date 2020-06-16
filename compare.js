;(function () {
    let lastFilter=null;

    let querystring = '?sort%5B0%5D%5Bfield%5D=Date';
    querystring += '&sort%5B0%5D%5Bdirection%5D=asc';

    fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/Koten', {
        headers : {
            'Authorization' : 'Bearer keyRvDws7vyY80guN'
        }
    })
        .then(response => response.json())
        .then(dataK => {
            fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/Filter' + querystring, {
                headers: {
                    'Authorization': 'Bearer keyRvDws7vyY80guN'
                }
            })
                .then(response => response.json())
                .then(dataF => {
                    for (let record of dataF.records) {
                        lastFilter= record.fields.Id-1;
                    }

                    compare1 = sessionStorage.getItem('vergelijk1');
                    compare2 = sessionStorage.getItem('vergelijk2');

                    console.log(compare1);
                    console.log(compare2);

                    document.getElementById("rating1").innerText = dataK.records[compare1].fields.Score;
                    document.getElementById("rating2").innerText = dataK.records[compare2].fields.Score;

                    document.getElementById("prijs1").innerText = dataK.records[compare1].fields.Kostprijs;
                    document.getElementById("prijs2").innerText = dataK.records[compare2].fields.Kostprijs;

                    document.getElementById("opp1").innerText = dataK.records[compare1].fields.Oppervlakte;
                    document.getElementById("opp2").innerText = dataK.records[compare2].fields.Oppervlakte;

                    let school = dataF.records[lastFilter].fields.School;
                    if (school === "Odisee campus") {
                        document.getElementById("afstand1").innerText = dataK.records[compare1].fields.Odisee;
                        document.getElementById("afstand2").innerText = dataK.records[compare2].fields.Odisee;
                    }
                    if (school === "Universiteit") {
                        document.getElementById("afstand1").innerText = dataK.records[compare1].fields.Universiteit;
                        document.getElementById("afstand2").innerText = dataK.records[compare2].fields.Universiteit;
                    }
                    if (school === "Hogeschool") {
                        document.getElementById("afstand1").innerText = dataK.records[compare1].fields.Hogeschool;
                        document.getElementById("afstand2").innerText = dataK.records[compare2].fields.Hogeschool;
                    }

                    document.getElementById("adres1").innerText = dataK.records[compare1].fields.Adres;
                    document.getElementById("adres2").innerText = dataK.records[compare2].fields.Adres;

                });
        });
})();
