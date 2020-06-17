let city = document.getElementById('stad');
let school = document.getElementById('school');
let minPrice = document.getElementById('minprijs');
let maxPrice = document.getElementById('maxprijs');
let minSurface = document.getElementById('surfaceMin');
let maxSurface = document.getElementById('surfaceMax');
let distance = document.getElementById('distance');

document.getElementById('range').innerText = distance.value;

document.getElementById('btnhelp').addEventListener("click", function () {
    window.location.href = "problemen.html"
})

document.getElementById('stad').addEventListener('change', function () {
    if(city.value != '-'){
        document.getElementById('city').style.borderColor = "black";
    }
    else {
        document.getElementById('city').style.borderColor = "#C73333";
    }
})

document.getElementById('school').addEventListener('change', function () {
    if((school.value != '-')){
        document.getElementById('schoolId').style.borderColor = "black";
    }
    else{
        document.getElementById('schoolId').style.borderColor = "#C73333";
    }
})

document.getElementById('minprijs').addEventListener('change', function () {
    if((minPrice.value != '') && (maxPrice.value != '')){
        document.getElementById('prijsId').style.borderColor = "black";
    }
})

document.getElementById('maxprijs').addEventListener('change', function () {
    if((minPrice.value != '') && (maxPrice.value != '')){
        document.getElementById('prijsId').style.borderColor = "black";
    }
})

document.getElementById('surfaceMin').addEventListener('change', function () {
    if((minSurface.value != '') && (maxSurface.value != '')){
        document.getElementById('surfaceId').style.borderColor = "black";
    }
})

document.getElementById('surfaceMax').addEventListener('change', function () {
    if((minSurface.value != '') && (maxSurface.value != '')){
        document.getElementById('surfaceId').style.borderColor = "black";
    }
})

document.getElementById('distance').addEventListener('change', function () {
    if((distance.value != '')){
        document.getElementById('distanceId').style.borderColor = "black";
    }
})


document.getElementById('distance').addEventListener('input', function () {
    document.getElementById('range').innerText = distance.value;
})

document.getElementById('login').addEventListener("click", function () {
    window.location.href = "login.html"
})

document.getElementById('btnreset').addEventListener("click", function(){
    city.value = '';
    school.value = '';
    minPrice.value = '';
    maxPrice.value = '';
    minSurface.value = '';
    maxSurface.value = '';
    distance.value = '25';
    document.getElementById('range').innerText = distance.value;
})

document.getElementById('btnbevestig').addEventListener("click", function () {
    if (maxPrice.value == ''){
        maxPrice.value = 999;
    }
    if (minPrice.value == ''){
        minPrice.value = 0;
    }
    if(minSurface.value == ''){
        minSurface.value = 0;
    }
    if(maxSurface.value == ''){
        maxSurface.value = 999;
    }

    let data = {
        "records": [{
            "fields": {
                "Stad": city.value,
                "School": school.value,
                "minPrijs": parseInt(minPrice.value),
                "maxPrijs": parseInt(maxPrice.value),
                "minOpp": parseInt(minSurface.value),
                "maxOpp": parseInt(maxSurface.value),
                "afstandSchool": parseInt(distance.value)}
        }]
    };
    fetch('https://api.airtable.com/v0/appPnjWzgOvV0Rzg7/Filter', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer keyeslWJOSlD2jqJl',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
    setTimeout(function () {window.location.href = "lijst.html"}, 300);
})


