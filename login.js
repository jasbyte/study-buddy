;(function () {
    'use strict'
    document.getElementById('btnRegistreer').addEventListener("click", function () {
        window.location.href = "registreer.html"

    })
    document.getElementById('home').addEventListener("click", function () {
        window.location.href = "index.html"
    })

    document.getElementById('previous').addEventListener('click', function () {
        window.history.back();
    })

    fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/gebruikers', {
        headers: {
            'Authorization': 'Bearer keyRvDws7vyY80guN'
        }
    })

        .then(response => response.json())
        .then(data => {
            let qstEmail = document.getElementById('qstEmail');
            let qstpas = document.getElementById('qstwachtwoord');

            let errEmail = document.getElementById('erremail');
            let errPass = document.getElementById('errwachtwoord');

            let valid = true;


            document.getElementById('btnSubmit').addEventListener('click', function () {
                if (qstEmail.value == '') {
                    valid = false;
                    errEmail.innerText = 'Gelieve een  e-mail adres in te geven'
                    errEmail.style.display = 'block';
                    document.getElementById('qstEmail').classList.add('invalid');
                }
                else {
                    errEmail.style.display = 'none';
                    document.getElementById('qstEmail').classList.add('valid');
                }

                if (qstwachtwoord.value == '') {
                    valid = false;
                    console.log('fout')
                    errPass.innerText = 'Gelieve een wachtwoord in te geven'
                    errPass.style.display = 'block';
                    document.getElementById('qstwachtwoord').classList.add('invalid');
                }
                else {
                    errPass.style.display = 'none';
                    document.getElementById('qstwachtwoord').classList.add('valid');
                }


                if (valid) {
                    for (let i = 0; i < data.records.length; i++) {
                        if (qstEmail.value === data.records[i].fields.Email) {
                            if (qstpas.value === data.records[i].fields.Wachtwoord) {
                                document.getElementById('thankyou').style.display = "block";
                                document.getElementById('form1').style.display = "none";
                            }
                            else {
                                document.getElementById('qstwachtwoord').classList.remove('valid')
                                document.getElementById('qstwachtwoord').classList.add('invalid');
                                alert('Het ingegeven wachtwoord is incorrect');
                            }
                        }
                    }
                }
            })
        });
})();
