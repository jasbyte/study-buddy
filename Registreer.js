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
			var errZIP = document.getElementById('errZIP');
			var errCity = document.getElementById('errCity');
			var errPassword = document.getElementById('errPassword');
            var errPassword2 = document.getElementById('errPassword2');
            var errAdres = document.getElementById('errAdres');
            var errBirthdate = document.getElementById('errBirthdate');

			// input shortcuts
			var qstName = document.getElementById('qstName');
            var qstZIP = document.getElementById('qstZIP');
            var qstCity = document.getElementById('qstCity');
            var qstPassword = document.getElementById('qstPassword');
            var qstPassword2 = document.getElementById('qstPassword2');
            var qstAdres = document.getElementById('qstAdres');
            var qstBirthdate = document.getElementById('qstBirthdate');
			
			
			
			// hide all error messages
			var errMessages = document.querySelectorAll('.message--error');
			for (var i = 0; i < errMessages.length; i++) {
				errMessages[i].style.display = 'none';
			}

			
			// mail with regex
			if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]/.test(qstEmail.value)) {
				isValid = false;
				errEmail.innerHTML = 'gelieve een geldig email in te vullen';
				errEmail.style.display = 'block';
            }
			  
			  
	
			//check scroll foutmelding
			if(qstZIP.value == '' || qstCity.value == '' || qstName.value == '' || qstPassword == '' || qstPassword2 == '' || qstBirthdate == ''){
				isValid = false;
				window.scrollTo(0, 0);
				document.getElementById('summary').style.display = "block";
				document.getElementById('form1').style.display = 'block';
				document.getElementById('thankyou').style.display = 'none';
			}
			else{
				document.getElementById('summary').style.display = 'none';
				document.getElementById('form1').style.display = 'none';
				document.getElementById('thankyou').style.display = 'block';
			}

			// check street and number
			if (qstAdres.value == '') {
				isValid = false;
				errAdres.innerHTML = 'gelieve een straat en nummer in te vullen';	
				errAdres.style.display = 'block';		
            }

			// check zip
			if (qstZIP.value == '') {
				isValid = false;
				errZIP.innerHTML = 'gelieve een postcode in te vullen';	
				errZIP.style.display = 'block';
            } 

			// check city
			if (qstCity.value == '') {
				isValid = false;
				errCity.innerHTML = 'gelieve een gemeente in te vullen';	
				errCity.style.display = 'block';
            }

			//check name
			if(qstName.value == ''){
				isValid = false;
				errName.innerHTML = 'gelieve een naam in te geven';
				errName.style.display = 'block';
            }
			//check password
			if(qstPassword.value == '' || qstPassword2.value == ''){
				isValid = false;
				errPassword.innerHTML = 'gelieve een wachtwoord in te vullen';
				errPassword2.innerHTML = 'gelieve een wachtwoord in te vullen';
				errPassword.style.display = 'block';
				errPassword2.style.display = 'block';
			}
			
			if(qstPassword != qstPassword2){
				isValid == false;
				errPassword2.innerHTML = 'Het wachtwoord is niet hetzelfde';
				errPassword2.style.display = 'block';
			}

            // check birthdate

            if(qstBirthdate.value == ''){
				isValid = false;
				errBirthdate.innerHTML = 'gelieve je geboortedatum in te vullen';
				errBirthdate.style.display = 'block';
            }

			
			// draw conclusion
			if (isValid) {
				// show thank you
				
			} else {
				// show summary
			}

		});
	})

})();