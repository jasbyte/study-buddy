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
			var errnaam = document.getElementById('errnaam');
			var errfamilienaam = document.getElementById('errfamilienaam');
			var errbericht = document.getElementById('errbericht');
            

			// input shortcuts
			var qstnaam = document.getElementById('qstnaam');
            var qstfalilienaam = document.getElementById('qstfamilienaam');
            var qstbericht = document.getElementById('qstbericht');
         
			
			
			
			// hide all error messages
			var errMessages = document.querySelectorAll('.message--error');
			for (var i = 0; i < errMessages.length; i++) {
				errMessages[i].style.display = 'none';
			}

			
			// mail with regex
			if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]/.test(qstemail.value)) {
				isValid = false;
				erremail.innerHTML = 'gelieve een geldig email in te vullen';
				erremail.style.display = 'block';
            }
            
            // check street and number
			if (qstnaam.value == '') {
				isValid = false;
				errnaam.innerHTML = 'gelieve je naam in te vullen';	
				errnaam.style.display = 'block';		
            }

			// check zip
			if (qstfalilienaam.value == '') {
				isValid = false;
				errfamilienaam.innerHTML = 'gelieve je familienaam in te vullen';	
				errfamilienaam.style.display = 'block';
            } 

			// check city
			if (qstbericht.value == '') {
				isValid = false;
				errbericht.innerHTML = 'gelieve je bericht in te geven';	
				errbericht.style.display = 'block';
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