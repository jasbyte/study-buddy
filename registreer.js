;(function() {
    'use strict';

    // wait till DOM is loaded
    window.addEventListener('load', function() {
        // add novalidate to form
        document.getElementById('form1').setAttribute('novalidate', 'novalidate');
        // intercept document submit

        document.getElementById('previous').addEventListener("click", function () {
            window.history.back();
        })

        fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/gebruikers', {
            headers: {
                'Authorization': 'Bearer keyRvDws7vyY80guN'
            }
        })

            .then(response => response.json())
            .then(data => {
                console.log(data)
        document.getElementById('form1').addEventListener('submit', function (e) {
            // halt event
            e.preventDefault();
            e.stopPropagation();

            // form checking
            let isValid = true;

            // error messages shortcuts
            let errName = document.getElementById('errName');
            let errZIP = document.getElementById('errZIP');
            let errCity = document.getElementById('errCity');
            let errPassword = document.getElementById('errPassword');
            let errPassword2 = document.getElementById('errPassword2');
            let errAdres = document.getElementById('errAdres');
            let errBirthdate = document.getElementById('errBirthdate');

            // input shortcuts
            let qstName = document.getElementById('qstName');
            let qstZIP = document.getElementById('qstZIP');
            let qstCity = document.getElementById('qstCity');
            let qstPassword = document.getElementById('qstPassword');
            let qstPassword2 = document.getElementById('qstPassword2');
            let qstAdres = document.getElementById('qstAdres');
            let qstBirthdate = document.getElementById('qstBirthdate');

            // hide all error messages
            let errMessages = document.querySelectorAll('.message--error');
            for (let i = 0; i < errMessages.length; i++) {
                errMessages[i].style.display = 'none';
            }

            //check name
            if (qstName.value == '') {
                isValid = false;
                errName.innerHTML = 'gelieve een naam in te geven';
                errName.style.display = 'block';
                qstName.classList.remove("valid");
                qstName.classList.add("invalid");
            } else {
                errName.style.display = "none";
                qstName.classList.remove("invalid");
                qstName.classList.add("valid");

            }

            // mail with regex
            if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]/.test(qstEmail.value)) {
                isValid = false;
                errEmail.innerHTML = 'gelieve een geldig email in te vullen';
                errEmail.style.display = 'block';
                qstEmail.classList.remove("valid");
                qstEmail.classList.add("invalid");
            } else {
                errEmail.style.display = "none";
                qstEmail.classList.remove("invalid");
                qstEmail.classList.add("valid");

            }
            for (let i = 0; i < data.records.length; i++){
                if (qstEmail.value === data.records[i].fields.Email) {
                    isValid = false;
                    errEmail.innerHTML = 'het opgegeven e-mail adres werd reeds gebruikt';
                    errEmail.style.display = 'block';
                    qstEmail.classList.remove("valid");
                    qstEmail.classList.add("invalid");
                }
            }


            //check password
            if (qstPassword.value == '') {
                isValid = false;
                errPassword.innerHTML = 'gelieve een wachtwoord in te vullen';
                errPassword.style.display = 'block';
                qstPassword.classList.remove("valid");
                qstPassword.classList.add("invalid");
            } else {
                errPassword.style.display = "none";
                qstPassword.classList.remove("invalid");
                qstPassword.classList.add("valid");
            }

            if (qstPassword2.value == '') {
                isValid = false;
                errPassword2.innerHTML = 'gelieve een wachtwoord in te vullen';
                errPassword2.style.display = 'block';
                qstPassword2.classList.remove("valid");
                qstPassword2.classList.add("invalid");
            } else {
                errPassword2.style.display = "none";
                qstPassword2.classList.remove("invalid");
                qstPassword2.classList.add("valid");
            }

            if (qstPassword.value != qstPassword2.value) {
                isValid = false;
                errPassword2.innerHTML = 'De wachtwoorden stemmen niet overeen';
                errPassword2.style.display = 'block';
                qstPassword2.classList.remove("valid");
                qstPassword.classList.remove("valid");
                qstPassword2.classList.add("invalid");
                qstPassword.classList.add("invalid");
            }

            // check zip
            if (qstZIP.value == '') {
                isValid = false;
                errZIP.innerHTML = 'gelieve een postcode in te vullen';
                errZIP.style.display = 'block';
                qstZIP.classList.remove("valid");
                qstZIP.classList.add("invalid");
            } else {
                errZIP.style.display = "none";
                qstZIP.classList.remove("invalid");
                qstZIP.classList.add("valid");
            }

            // check city
            if (qstCity.value == '') {
                isValid = false;
                errCity.innerHTML = 'gelieve een gemeente in te vullen';
                errCity.style.display = 'block';
                qstCity.classList.remove("valid");
                qstCity.classList.add("invalid");
            } else {
                errCity.style.display = "none";
                qstCity.classList.remove("invalid");
                qstCity.classList.add("valid");

            }

            // check street and number
            if (qstAdres.value == '') {
                isValid = false;
                errAdres.innerHTML = 'gelieve een straat en nummer in te vullen';
                errAdres.style.display = 'block';
                qstAdres.classList.remove("valid");
                qstAdres.classList.add("invalid");
            } else {
                errAdres.style.display = "none";
                qstAdres.classList.remove("invalid");
                qstAdres.classList.add("valid");
            }

            if (qstBirthdate.value == '') {
                isValid = false;
                errBirthdate.innerHTML = 'gelieve je geboortedatum in te vullen';
                errBirthdate.style.display = 'block';
                qstBirthdate.classList.remove("valid");
                qstBirthdate.classList.add("invalid");
            } else {
                errBirthdate.style.display = "none";
                qstBirthdate.classList.remove("invalid");
                qstBirthdate.classList.add("valid");
            }

            // draw conclusion
            if (isValid) {
                document.getElementById('summary').style.display = 'none';
                document.getElementById('form1').style.display = 'none';
                document.getElementById('thankyou').style.display = 'block';

                let info = {
                    "records": [{
                        "fields": {
                            "Naam": qstName.value,
                            "Email": qstEmail.value,
                            "Wachtwoord": qstPassword.value,
                            "Postcode": qstZIP.value,
                            "Stad": qstCity.value,
                            "Adress": qstAdres.value,
                            "Geboortedatum": qstBirthdate.value
                        }
                    }]
                };

                fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/gebruikers', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer keyRvDws7vyY80guN',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(info)
                })
                    .then(response => response.json())
            } else {
                window.scrollTo(0, 0);
                document.getElementById('summary').style.display = "block";
                document.getElementById('form1').style.display = 'block';
                document.getElementById('thankyou').style.display = 'none';
            }
        });
    })
    })
})();