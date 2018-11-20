// Clase 6 de JavaScript

window.onload = function () {

	
	/*
	De igual manera, aquellos campos que poseen error. Deberán tener un texto que especifique el tipo de error. 
	Dicho texto deberá estar presente en el elemento con clase invalid-feedback.
	El formulario contará con validaciones especiales para los siguientes campos:
	Correo electrónico: deberá validar que el texto ingresado coincida con un formato de email valido.
	Teléfono de contacto: deberá validar que el texto ingresado no contenga caracteres alfabéticos, sólo números.
	Contraseña y repetir contraseña: deberá validarse que los dos campos contengan exactamente el mismo texto. Y adicionalmente la contraseña no podrá ser inferior a 4 caracteres.
	Algo indispensable es que las validaciones no solo deberán hacerse al enviar el formulario, si no también al momento en el que el visitante interactúa con cada campo (validación on-time).
	Una vez el formulario esté validado y tras enviarse el mismo:
	Deberá desaparecer / ocultarse el formulario.
	Deberá mostrar en pantalla un listado <ul> con los valores de cada uno de los campos a excepción de las contraseñas.
	Un texto adicional que diga "Gracias por registrarte".

	Nombre completo type="text" name="fullName" id="fullName" class="form-control is-invalid">
	Correo electrónico type="email" name="email"
	Teléfono de contacto type="text" name="phone"
	Documento de Identidad	<input type="text" name="dni" class="campo">
	País de nacimiento name="country"> option value="">Elegí tu país</option>
	Ciudad: type="text" name="city" class="campo">
	Contraseña type="password" name="password" <button type="button" class="viewPassword">ver</button>
	Repetir Contraseña type="password" name="rePassword" <button type="button" class="viewRePassword">ver</button>

	*/

	var isHome = document.querySelector('.home'); //console.log(isHome); // seteados como clase, no lo toma como name
	// isHome ? title.innerText = 'isHome y title estan seteado' : ''; // console.log('isHome esta seteado');

	var formMessage = document.querySelector('.formMessage'); //console.log(title);
	
	var inputName = document.querySelector('[name=fullName]'); //console.log(inputName);
	var inputEmail = document.querySelector('[name=email]');
	var inputPhone = document.querySelector('[name=phone]');
	var inputDni = document.querySelector('[name=dni]');
	var inputCountry = document.querySelector('[name=country]');
	var inputCity = document.querySelector('[name=city]');
	var inputPassword = document.querySelector('[name=password]');
	var inputRePassword = document.querySelector('[name=rePassword]');
	var viewPassword = document.querySelector('.viewPassword');
	var viewRePassword = document.querySelector('.viewRePassword');
	var submitButton = document.querySelector('[type=submit]');

	var regexName = /^([a-zA-Z])\w+/;
	var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	var regexNumber = /^[0-9]*$/;
	

	// Valida el form completo al enviar (click en Enviar): Todos los campos son obligatorios, ninguno vacío.
	// Si no pasa el test, no es posible enviar el form y se agrega a los campos con error la clase bootstrap is-invalid.

	var theForm = document.querySelector('#contactForm'); console.log(theForm);
	
	theForm.addEventListener('submit', function (eventCase) {
		if (inputName.value.trim() === ''     || 	inputEmail.value.trim() === ''    ||
			inputPhone.value.trim() === ''    || 	inputDni.value.trim() === ''      ||
			inputCountry.value.trim() === ''  || 	inputCity.value.trim() === ''     ||
			inputPassword.value.trim() === '' ||	inputPassword.value.trim() === '' ||
			!regexName.test(inputName.value.trim())    		||	!regexEmail.test(inputEmail.value.trim())  		|| 
			!regexEmail.test(inputPassword.value.trim())    ||	!regexEmail.test(inputRePassword.value.trim())  || 
			!regexNumber.test(inputPhone.value.trim()) 		|| 	!regexEmail.test(inputDni.value.trim())    		){

			eventCase.preventDefault(); // Del evento capturado, se evita dispare su comportamiento default
			formMessage ? 
				formMessage.innerText = 'Requiere información adicional, por favor complete para continuar' : 
				formMessage.innerText = ''; 	// console.log('isHome esta seteado');

			if (inputName.value.trim() === '') {
				inputName.classList.add('is-invalid');
				formMessage.innerText = 'Requiere información adicional, por favor complete para continuar'
			} else if (!regexName.test(inputName.value.trim())) {
				inputName.classList.remove('is-invalid');
			} else {

			}


			inputEmail.value.trim() === '' ? 
				inputEmail.classList.add('is-invalid') : inputEmail.classList.remove('is-invalid');
			inputPhone.value.trim() === '' ? 
				inputPhone.classList.add('is-invalid') : inputPhone.classList.remove('is-invalid');
			inputDni.value.trim() === '' ? 
				inputDni.classList.add('is-invalid') : inputDni.classList.remove('is-invalid');
			inputCountry.value.trim() === '' ? 
				inputCountry.classList.add('is-invalid') : inputCountry.classList.remove('is-invalid');
			inputCity.value.trim() === '' ? 
				inputCity.classList.add('is-invalid') : inputCity.classList.remove('is-invalid');
			inputPassword.value.trim() === '' ? 
				inputPassword.classList.add('is-invalid') : inputPassword.classList.remove('is-invalid');
			inputRePassword.value.trim() === '' ? 
				inputRePassword.classList.add('is-invalid') : inputRePassword.classList.remove('is-invalid');
			// inputName.classList.add('error'); // inputEmail.classList.add('error');
			// theSubmitButton.setAttribute('disabled', 'true');
		}
	});

	
	function validarCampo () {
		var errorTxt = this.parentElement.querySelector('span');
		if (this.value.trim() === '') { 						// Si el campo está vacío
			errorTxt.innerText = 'Este campo es obligatorio';   // inserta mensaje al span
			this.classList.add('error'); 						// Se agrega al input la clase error
		} else {
			this.classList.remove('error');
			errorTxt.innerText = '';
		}
	};

	// Recorre el array de campos del form y a cada campo se asigna el evento blur
	theInputs.forEach(function (input) {
		input.addEventListener('blur', validarCampo);
	});
	// inputName.addEventListener('blur', validarCampo);
	// inputEmail.addEventListener('blur', validarCampo);
	// selectCountries.addEventListener('blur', validarCampo);

	
/*
	viewPassword.addEventListener('click', function () {
		if (inputPassword.getAttribute('type') === 'password') {
			inputPassword.setAttribute('type', 'text');
			this.innerText = 'ocultar';
		} else {
			inputPassword.setAttribute('type', 'password');
			this.innerText = 'ver';
		}
	});
	
	// capturamos todos los campos del formulario
	var theInputs = Array.from(theForm.elements); console.log(theInputs);
	
	// sacamos los últimos elementos del array
	theInputs.pop(); // btn ver password
	theInputs.pop();// btn submit
	console.log(theInputs);

	inputName.addEventListener('focus', function () { // testeo de event focus
		console.log('Hiciste foco en el campo ' + this.getAttribute('name'));
	});

	inputDNI.addEventListener('keyup', function () {
		// this = el input que recibe el evento, parentElement retorna el div .input-container, captura el span dentro
		var errorTxt = this.parentElement.querySelector('span');
		if (!regexNumber.test(this.value.trim())) {
			this.classList.add('error');
			errorTxt.innerText = 'Ingresá solamente números';
		} else {
			errorTxt.innerText = '';
			this.classList.remove('error');
		}
	});

	function validarCampo () {
		var errorTxt = this.parentElement.querySelector('span');
		if (this.value.trim() === '') { 						// Si el campo está vacío
			errorTxt.innerText = 'Este campo es obligatorio';   // inserta mensaje al span
			this.classList.add('error'); 						// Se agrega al input la clase error
		} else {
			this.classList.remove('error');
			errorTxt.innerText = '';
		}
	};

	// Recorre el array de campos del form y a cada campo se asigna el evento blur
	theInputs.forEach(function (input) {
		input.addEventListener('blur', validarCampo);
	});
	// inputName.addEventListener('blur', validarCampo);
	// inputEmail.addEventListener('blur', validarCampo);
	// selectCountries.addEventListener('blur', validarCampo);

	inputEmail.addEventListener('keyup', function () {
		var errorTxt = this.parentElement.querySelector('span');
		if (this.value.trim().length > 5) {
			if (!regexEmail.test(this.value.trim())) {
				this.classList.add('error');
				errorTxt.innerText = 'Ingresá un formato de email valido';
			} else {
				errorTxt.innerText = '';
				this.classList.remove('error');
			}
		}
	});

	// Evento change del select
	selectCountries.addEventListener('change', function () {
		console.log(this.selectedIndex); // muestro en consola la opción elegida
		console.log(this.options[this.selectedIndex].value);
		var cityInput = document.querySelector('#cityInput'); // capturamos al contenedor del campo ciudad
		if (this.value === 'Argentina') {
			console.log('Si, elegiste argentina');
			cityInput.classList.remove('hidden');
		} else {
			cityInput.classList.add('hidden');
		}
	});
*/
};