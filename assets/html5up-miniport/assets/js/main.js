// Clase 1 de JavaSript

window.onload = function () {


	/* Aclaración: vamos a utilizar el archivo en el campus html5up.zip. 
		Concretamente index.html y main.js ubicado en assets/js/. Recordá de utilizar window.onload.
		Utilizando document.getElementById(), ocultar el elemento <h1 id="titular"> al cargar la página.
		Utilizando querySelector() hacer que la imagen de la lechuza, se convierta en blanco y negro, 
			podemos utilizar: elemento.style.filter = "grayscale(100%)";
		Seleccionar el elemento con id "copyright" y mostrar en consola a dicho elemento.
		Utilizando elemento.style, cambiarle el color actual por un rojo al <h2>.*/

	console.log('-- Ejericio 3 Clase 1 - DOM --');

	console.log(document.getElementById('titular'));
	document.getElementById('titular').style.display = 'none';

	console.log('');
 
	console.log(document.querySelector('.image'));						// using querySelector
	document.querySelector('.image').style.filter = "grayscale(100%)";

	//console.log(document.getElementById('lechuza'));					// using getElementById
	//document.getElementById('lechuza').style.filter = "grayscale(100%)";

	console.log('');

	console.log(document.getElementById('copyright'));

	console.log(document.querySelectorAll('h2'));
	document.querySelectorAll('h2').style.color = "red";

};