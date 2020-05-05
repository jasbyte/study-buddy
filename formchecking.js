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
			var isValid = true;
      
			// error messages shortcuts
      			var errName = document.getElementById('errName');
     			var errEmail = document.getElementById('errEmail');
      			var errWachtwoord = document.getElementById('errWachtwoord');
      			var errPostcode = document.getElementById('errPostcode');
      			var errCity = document.getElementById('errCity');
			var errStreet = document.getElementById('errStreet');
			var errNumber = document.getElementById('errNumber');
			var errGeboorteDatum = document.getElementById('errGeboorteDatum');

			// input shortcuts
			var qstName = document.getElementById('qstName');
      			var qstEmail = document.getElementById('qstEmail');
      			var qstWachtwoord = document.getElementById('qstWachtwoord');
      			var qstPostcode = document.getElementById('qstPostcode');
      			var qstCity = document.getElementById('qstCity');
			var qstStreet = document.getElementById('qstStreet');
			var qstNumber = document.getElementById('qstNumber');
			var qstGeboorteDatum = document.getElementById('qstGeboorteDatum');

			// hide all error messages
			var errMessages = document.querySelectorAll('.message--error');
			for (var i = 0; i < errMessages.length; i++) {
				errMessages[i].style.display = 'none';
			}
			// check name
			if (qstName.value == '') {
				isValid = false;
				errName.innerHTML = 'gelieve een naam in te vullen';
				errName.style.display = 'block';
				document.getElementById('qstName').classList.add('invalid');
			}
			else {
				document.getElementById('qstName').classList.add('valid');
			}
			// check email
			if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]/.test(qstEmail.value)) {
				isValid = false;
				errEmail.innerHTML = 'gelieve een geldig email in te vullen';
				errEmail.style.display = 'block';
				document.getElementById('qstEmail').classList.add('invalid');
			}
			else {
				document.getElementById('qstEmail').classList.add('valid');
			}
			// check Wachtwoord
			// check Postcode
			if (qstPostcode.value == '') {
				isValid = false;
				errZip.innerHTML = 'gelieve een postcode in te vullen';	
				errZip.style.display = 'block';
				document.getElementById('qstPostcode').classList.add('invalid');
			}
			else {
				document.getElementById('qstPostcode').classList.add('valid');
			}
			// check country
			if (qstCountry.value == -1) {
				isValid = false;
				errCountry.innerHTML = 'gelieve een land in te vullen';
				errCountry.style.display = 'block';
				document.getElementById('qstCountry').classList.add('invalid');
			}
			else {
				document.getElementById('qstCountry').classList.add('valid');
			}
			// check city
			if (qstCity.value == '') {
				isValid = false;
				errCity.innerHTML = 'gelieve een gemeente in te vullen';
				errCity.style.display = 'block';
				document.getElementById('qstCity').classList.add('invalid');
			}
			else {
				document.getElementById('qstCity').classList.add('invalid');
			}
			// check street
			if (qstStreet.value == '') {
				isValid = false;
				errStreet.innerHTML = 'gelieve een straat in te vullen';	
				errStreet.style.display = 'block';
				document.getElementById('qstStreet').classList.add('invalid');
			}
			else {
				document.getElementById('qstStreet').classList.add('valid');
			}
			// check number
			if (qstNumber.value == '') {
				isValid = false;
				qstNumber.innerHTML = 'gelieve een nummer in te vullen';
				qstNumber.style.display = 'block';
				document.getElementById('qstNumber').classList.add('invalid');
			}
			else {
				document.getElementById('qstCity').classList.add('invalid');
			}
			// check geboortedatum
			if (qstGeboorteDatum.value == '') {
				isValid = false;
				qstGeboorteDatum.innerHTML = 'gelieve een van de twee aan te duiden';
				qstGeboorteDatum.style.display = 'block';
				document.getElementById('qstNumber').classList.add('invalid');
			}
			else {
				document.getElementById('qstCity').classList.add('invalid');
			}

			// check gebruikersVoorwaarden gechecked
			if (document.querySelectorAll('.qstn9  input[type=checkbox]:checked'.length<1)) {
				isValid = false;
				errAccept.innerHTML = 'gelieve te accepteren';
				errAccept.style.display = 'block';
			}
			// draw conclusion
			if (isValid) {
				document.getElementById('form1').style.display = "none";
				document.getElementById('thankyou').style.display = "block";
			} else {
				scroll(0,0);
				document.getElementById('summary').style.display = "block";
			}
		});
		document.getElementById('qstInterests_other').addEventListener('change', function () {
			if (document.getElementById('qstInterests_other').checked) {
				document.getElementById('qstInterests_inp_other').style.display = "block";
			}
			else {
				document.getElementById('qstInterests_inp_other').style.display = "none";
			}
		});
	})
})();
