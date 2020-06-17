;(function () {
    let lastFilter=null;

    document.getElementById('previous').addEventListener("click", function () {
        window.history.back();
    })

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

                    let compare1 = sessionStorage.getItem('vergelijk1').charAt(0);
                    let compare2 = sessionStorage.getItem('vergelijk2').charAt(0);

                    for(let i=1; i <= dataK.records[compare1].fields.Score; i++) {
                        document.getElementById("ster"+i).className = "fa fa-star checked";
                    }
                    for(let i=6; i <= dataK.records[compare2].fields.Score+5; i++) {
                        document.getElementById("ster"+i).className = "fa fa-star checked";
                    }

                    document.getElementById("imgKot1").src = dataK.records[compare1].fields.Afbeelding1[0].url;
                    document.getElementById("imgKot2").src = dataK.records[compare2].fields.Afbeelding1[0].url;

                    document.getElementById("naamKot1").innerText = dataK.records[compare1].fields.Naam;
                    document.getElementById("naamKot2").innerText = dataK.records[compare2].fields.Naam;

                    document.getElementById("prijs1").innerText = dataK.records[compare1].fields.Kostprijs;
                    document.getElementById("prijs2").innerText = dataK.records[compare2].fields.Kostprijs;

                    document.getElementById("opp1").innerText = dataK.records[compare1].fields.Oppervlakte;
                    document.getElementById("opp2").innerText = dataK.records[compare2].fields.Oppervlakte;

                    let school = dataF.records[lastFilter].fields.School;

                    if (school === "Odisee campus") {
                        //document.getElementById('schoolAfstand').style.display = "block"
                        document.getElementById("afstand1").innerText = dataK.records[compare1].fields.Odisee;
                        document.getElementById("afstand2").innerText = dataK.records[compare2].fields.Odisee;
                    }
                    if (school === "Universiteit") {
                        //document.getElementById('schoolAfstand').style.display = "block"
                        document.getElementById("afstand1").innerText = dataK.records[compare1].fields.Universiteit;
                        document.getElementById("afstand2").innerText = dataK.records[compare2].fields.Universiteit;
                    }
                    if (school === "Hogeschool") {
                        //document.getElementById('schoolAfstand').style.display = "block"
                        document.getElementById("afstand1").innerText = dataK.records[compare1].fields.Hogeschool;
                        document.getElementById("afstand2").innerText = dataK.records[compare2].fields.Hogeschool;
                    }

                    if (school === "-"){
                        document.getElementById('schoolAfstand').style.display = "none";
                    }

                    document.getElementById("adres1").innerText = dataK.records[compare1].fields.Adres;
                    document.getElementById("adres2").innerText = dataK.records[compare2].fields.Adres;

                });
        });
})();
