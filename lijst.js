let id = 0;
let curId=null;
let vergelijk=0;
sessionStorage.clear();
;(function() {
    'use strict'
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
                headers : {
                    'Authorization' : 'Bearer keyRvDws7vyY80guN'
                }
            })
                .then(response => response.json())
                .then(dataF => {
                    let filterId=1;
                    for (let rec of dataF.records ) {
                        filterId = rec.fields.Id-1;
                    }

                    let divFlex1 = document.createElement('div');
                    divFlex1.setAttribute('class', 'flex-container');
                    document.body.appendChild(divFlex1);

                    let divFlex2;

                    let divImg;
                    let divInfo;
                    let pAdres;
                    let pPrijs;
                    let pOpp;

                    let divStars;
                    let spanStar1;
                    let spanStar2;
                    let spanStar3;
                    let spanStar4;
                    let spanStar5;

                    let inputBtn;
                    let compareBtn;

                    for (let record of dataK.records ) {
                        if (dataF.records[filterId].fields.Stad === record.fields.Stad || dataF.records[filterId].fields.Stad === "-") {
                            if ((dataF.records[filterId].fields.minPrijs <= record.fields.Kostprijs) && dataF.records[filterId].fields.maxPrijs >= record.fields.Kostprijs) {
                                if ((dataF.records[filterId].fields.minOpp <= record.fields.Oppervlakte) && dataF.records[filterId].fields.maxOpp >= record.fields.Oppervlakte) {
                                    //alert(record.fields.Stad+", "+record.fields.Kostprijs+", "+record.fields.Oppervlakte);
                                    if (!(dataF.records[filterId].fields.Stad === "-")){
                                        document.getElementById("titelStad").innerText = dataF.records[filterId].fields.Stad;
                                    }

                                    divFlex2 = document.createElement('div');
                                    divFlex2.setAttribute('class', 'flex-container2 flexbox');
                                    divFlex1.appendChild(divFlex2);

                                    divImg = document.createElement('div');
                                    let img = new Image();
                                    img.src = record.fields.Afbeelding1[0].url;
                                    img.setAttribute('alt', 'Foto van studentenkot');
                                    divImg.appendChild(img);
                                    divFlex2.appendChild(divImg);

                                    let divInfo = document.createElement('div');
                                    divInfo.setAttribute('class', 'info');
                                    divFlex2.appendChild(divInfo);

                                    let pAdres = document.createElement('p');
                                    pAdres.innerText = record.fields.Adres;
                                    divInfo.appendChild(pAdres);

                                    let pPrijs = document.createElement('p');
                                    pPrijs.innerText = record.fields.Kostprijs;
                                    divInfo.appendChild(pPrijs);

                                    let pOpp = document.createElement('p');
                                    pOpp.innerText = record.fields.Oppervlakte;
                                    divInfo.appendChild(pOpp);

                                    divStars = document.createElement('div');
                                    divStars.setAttribute('class', 'stars');
                                    divInfo.appendChild(divStars);

                                    if (record.fields.Score>=1) {
                                        spanStar1 = document.createElement('span');
                                        spanStar1.setAttribute('class', 'fa fa-star checked');
                                        divStars.appendChild(spanStar1);

                                        if (record.fields.Score>=2) {
                                            spanStar2 = document.createElement('span');
                                            spanStar2.setAttribute('class', 'fa fa-star checked');
                                            divStars.appendChild(spanStar2);

                                            if (record.fields.Score>=3) {
                                                spanStar3 = document.createElement('span');
                                                spanStar3.setAttribute('class', 'fa fa-star checked');
                                                divStars.appendChild(spanStar3);

                                                if (record.fields.Score>=4) {
                                                    spanStar4 = document.createElement('span');
                                                    spanStar4.setAttribute('class', 'fa fa-star checked');
                                                    divStars.appendChild(spanStar4);

                                                    if (record.fields.Score>=5) {
                                                        spanStar5 = document.createElement('span');
                                                        spanStar5.setAttribute('class', 'fa fa-star checked');
                                                        divStars.appendChild(spanStar5);
                                                    } else {
                                                        spanStar5 = document.createElement('span');
                                                        spanStar5.setAttribute('class', 'fa fa-star');
                                                        divStars.appendChild(spanStar5);
                                                    }
                                                } else {
                                                    spanStar4 = document.createElement('span');
                                                    spanStar4.setAttribute('class', 'fa fa-star');
                                                    divStars.appendChild(spanStar4);

                                                    spanStar5 = document.createElement('span');
                                                    spanStar5.setAttribute('class', 'fa fa-star');
                                                    divStars.appendChild(spanStar5);
                                                }
                                            } else {
                                                spanStar3 = document.createElement('span');
                                                spanStar3.setAttribute('class', 'fa fa-star');
                                                divStars.appendChild(spanStar3);

                                                spanStar4 = document.createElement('span');
                                                spanStar4.setAttribute('class', 'fa fa-star');
                                                divStars.appendChild(spanStar4);

                                                spanStar5 = document.createElement('span');
                                                spanStar5.setAttribute('class', 'fa fa-star');
                                                divStars.appendChild(spanStar5);
                                            }
                                        } else {
                                            spanStar2 = document.createElement('span');
                                            spanStar2.setAttribute('class', 'fa fa-star');
                                            divStars.appendChild(spanStar2);

                                            spanStar3 = document.createElement('span');
                                            spanStar3.setAttribute('class', 'fa fa-star');
                                            divStars.appendChild(spanStar3);

                                            spanStar4 = document.createElement('span');
                                            spanStar4.setAttribute('class', 'fa fa-star');
                                            divStars.appendChild(spanStar4);

                                            spanStar5 = document.createElement('span');
                                            spanStar5.setAttribute('class', 'fa fa-star');
                                            divStars.appendChild(spanStar5);
                                        }
                                    } else {
                                        spanStar1 = document.createElement('span');
                                        spanStar1.setAttribute('class', 'fa fa-star');
                                        divStars.appendChild(spanStar1);

                                        spanStar2 = document.createElement('span');
                                        spanStar2.setAttribute('class', 'fa fa-star');
                                        divStars.appendChild(spanStar2);

                                        spanStar3 = document.createElement('span');
                                        spanStar3.setAttribute('class', 'fa fa-star');
                                        divStars.appendChild(spanStar3);

                                        spanStar4 = document.createElement('span');
                                        spanStar4.setAttribute('class', 'fa fa-star');
                                        divStars.appendChild(spanStar4);

                                        spanStar5 = document.createElement('span');
                                        spanStar5.setAttribute('class', 'fa fa-star');
                                        divStars.appendChild(spanStar5);
                                    }

                                    inputBtn = document.createElement('input');
                                    inputBtn.setAttribute('type', 'submit');
                                    inputBtn.setAttribute('id', id);
                                    inputBtn.setAttribute('value', 'Bekijk');

                                    inputBtn.setAttribute("onClick", "curId=id;sessionStorage.setItem('id', id);window.location.href = 'detail.html';");
                                    divInfo.appendChild(inputBtn);

                                    compareBtn = document.createElement('input');
                                    compareBtn.setAttribute('type', 'submit');
                                    compareBtn.setAttribute('id', id+"verg");
                                    compareBtn.setAttribute('value', 'Vergelijk');
                                    vergelijk=0;
                                    compareBtn.setAttribute("onClick", "vergelijk++;\n" +
                                        "                        sessionStorage.setItem('vergelijk'+vergelijk, id);\n" +
                                        "                        document.getElementById(id).disabled = true;\n" +
                                        "                        if (vergelijk > 1) {\n" +
                                        "                            window.location.href = \"compare.html\";\n" +
                                        "                        }");
                                    //vergelijk++;sessionStorage.setItem('vergelijk'+vergelijk+'', vergelijk);alert('hey');console.log(vergelijk);
                                    divInfo.appendChild(compareBtn);
                                }
                            }
                        }
                        id++;
                    }
                });
        });
})();
