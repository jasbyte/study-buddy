;(function () {
    fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/Koten', {
        headers : {
            'Authorization' : 'Bearer keyRvDws7vyY80guN'
        }
    })
        .then(response => response.json())
        .then(data => {
            let id = localStorage.getItem("id");
            console.log(id);
            var slideIndex = 1;
            showSlides(slideIndex);
            document.getElementById("img1").src = data.records[id].fields.Afbeelding1[0].url;
            document.getElementById("img2").src = data.records[id].fields.Afbeelding2[0].url;
            document.getElementById("img3").src = data.records[id].fields.Afbeelding3[0].url;
            document.getElementById("img4").src = data.records[id].fields.Afbeelding4[0].url;

            document.getElementById("adres").innerText = data.records[id].fields.Adres;
            document.getElementById("prijs").innerText = "€"+data.records[id].fields.Kostprijs+" / maand";
            document.getElementById("opp").innerText = data.records[id].fields.Oppervlakte+"m²";
            document.getElementById("kaart").src = data.records[id].fields.Kaart;
            document.getElementById("omschrijving").innerText = data.records[id].fields.Omschrijving;

            if (data.records[id].fields.Score>=1) {
                document.getElementById("ster1").className = "fa fa-star checked";

                if (data.records[id].fields.Score>=2) {
                    document.getElementById("ster2").className = "fa fa-star checked";

                    if (data.records[id].fields.Score>=3) {
                        document.getElementById("ster3").className = "fa fa-star checked";

                        if (data.records[id].fields.Score>=4) {
                            document.getElementById("ster4").className = "fa fa-star checked";

                            if (data.records[id].fields.Score>=5) {
                                document.getElementById("ster5").className = "fa fa-star checked";
                            } else {
                                document.getElementById("ster5").className = "fa fa-star";
                            }
                        } else {
                            document.getElementById("ster4").className = "fa fa-star";
                            document.getElementById("ster5").className = "fa fa-star";
                        }
                    } else {
                        document.getElementById("ster3").className = "fa fa-star";
                        document.getElementById("ster4").className = "fa fa-star";
                        document.getElementById("ster5").className = "fa fa-star";
                    }
                } else {
                    document.getElementById("ster2").className = "fa fa-star";
                    document.getElementById("ster3").className = "fa fa-star";
                    document.getElementById("ster4").className = "fa fa-star";
                    document.getElementById("ster5").className = "fa fa-star";
                }
            } else {
                document.getElementById("ster1").className = "fa fa-star";
                document.getElementById("ster2").className = "fa fa-star";
                document.getElementById("ster3").className = "fa fa-star";
                document.getElementById("ster4").className = "fa fa-star";
                document.getElementById("ster5").className = "fa fa-star";
            }


            document.getElementById("prev").addEventListener('click', function () {
                plusSlides(-1);
            });
            document.getElementById("next").addEventListener('click', function () {
                plusSlides(1);
            });

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                if (n > slides.length) {
                    slideIndex = 1
                }
                if (n < 1) {
                    slideIndex = slides.length
                }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex - 1].style.display = "block";
            }
        });
})();
