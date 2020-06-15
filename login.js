;(function () {
    'use strict'
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
            console.log('fout')
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
                       if (qstpas.value === data.records[i].fields.wachtwoord) {
                           setTimeout(function () {window.location.href = "index.html";}, 300);
                       }
                       else {
                          alert('Het ingegeven wachtwoord is incorrect');
                       }
                 }
            }
        }
        })
    });
})();
