document.getElementById('btnSubmit').addEventListener('click', function() {
    var naam = document.getElementById('qstName').value;
    var email = document.getElementById('qstEmail').value;
    var wachtwoord = document.getElementById('qstPassword').value;
    var wachtwoordb = document.getElementById('qstPassword2').value;
    var postcode = document.getElementById('qstZIP').value;
    var stad = document.getElementById('qstCity').value;
    var straat = document.getElementById('qstAdres').value;
    var geboortedatum = document.getElementById('qstBirthdate').value;
   

let data = {
    "records": [{
        "fields": {
            "Naam": naam,
            "Email": email,
            "Wachtwoord": wachtwoord,
            "Wachtwoordbevestig":wachtwoordb,
            "Postcode": postcode,
            "Stad": stad,
            "Adress": straat,
            "Geboortedatum" : geboortedatum
        }
    }]
};

fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/Registreer', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer keyqNc8YK7gvWwhpu',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
});