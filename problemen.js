;(function() {
    'use strict';

    // wait till DOM is loaded
    window.addEventListener('load', function() {
        // add novalidate to form
        document.getElementById('form1').setAttribute('novalidate', 'novalidate');
        // intercept document submit
        document.getElementById('form1').addEventListener('submit', function(e) {
            // halt event
            e.preventDefault();
            e.stopPropagation();

            // form checking
            let isValid = true;

            // error messages shortcuts
            let errnaam = document.getElementById('errnaam');
            let errfamilienaam = document.getElementById('errfamilienaam');
            let erremail = document.getElementById('erremail');
            let errbericht = document.getElementById('errbericht');


            // input shortcuts
            let qstnaam = document.getElementById('qstnaam');
            let qstfalilienaam = document.getElementById('qstfamilienaam');
            let qstemail = document.getElementById('qstemail');
            let qstbericht = document.getElementById('qstbericht');


            // hide all error messages
            let errMessages = document.querySelectorAll('.message--error');
            for (let i = 0; i < errMessages.length; i++) {
                errMessages[i].style.display = 'none';
            }


            // mail with regex
            if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]/.test(qstemail.value)) {
                isValid = false;
                erremail.innerHTML = 'gelieve een geldig email in te vullen';
                erremail.style.display = 'block';
                qstemail.classList.remove("valid");
                qstemail.classList.add("invalid");
            }
            else {
                erremail.style.display = "none";
                qstemail.classList.remove("invalid");
                qstemail.classList.add ("valid");

            }

            // check street and number
            if (qstnaam.value == '') {
                isValid = false;
                errnaam.innerHTML = 'gelieve je naam in te vullen';
                errnaam.style.display = 'block';
                qstnaam.classList.remove("valid");
                qstnaam.classList.add("invalid");
            }
            else {
                errnaam.style.display = "none";
                qstnaam.classList.remove("invalid");
                qstnaam.classList.add ("valid");
            }

            // check familienaam
            if (qstfalilienaam.value == '') {
                isValid = false;
                errfamilienaam.innerHTML = 'gelieve je familienaam in te vullen';
                errfamilienaam.style.display = 'block';
                qstfalilienaam.classList.remove("valid");
                qstfalilienaam.classList.add("invalid");
            }
            else {
                errfamilienaam.style.display = "none";
                qstfalilienaam.classList.remove("invalid");
                qstfalilienaam.classList.add ("valid");
            }

            // check bericht
            if (qstbericht.value == '') {
                isValid = false;
                errbericht.innerHTML = 'gelieve je bericht in te geven';
                errbericht.style.display = 'block';
                qstbericht.classList.remove("valid");
                qstbericht.classList.add("invalid");
            }
            else {
                errbericht.style.display = "none";
                qstbericht.classList.remove("invalid");
                qstbericht.classList.add ("valid");
            }


            // draw conclusion
            if (isValid) {
                let naam = document.getElementById('qstnaam').value;
                let familienaam = document.getElementById('qstfamilienaam').value;
                let email = document.getElementById('qstemail').value;
                let bericht = document.getElementById('qstbericht').value;



                let data = {
                    "records": [{
                        "fields": {
                            "Naam": naam,
                            "Familienaam": familienaam,
                            "Email": email,
                            "Bericht":bericht

                        }
                    }]
                };

                fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/problemen',{
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer keyqNc8YK7gvWwhpu',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                setTimeout(function () {window.location.href = "index.html"}, 300);
            }
        });
    })

})();