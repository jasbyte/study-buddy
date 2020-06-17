document.getElementById('btnSubmit').addEventListener('click', function() {
    var naam = document.getElementById('qstnaam').value;
    var familienaam = document.getElementById('qstfamilienaam').value;
    var email = document.getElementById('qstemail').value;
    var bericht = document.getElementById('qstbericht').value;
    
   

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

fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/problemen', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer keyqNc8YK7gvWwhpu',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
});
