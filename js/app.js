// Clase 1 de JavaScript

window.onload = function () {

	/* Crear un archivo index.html, en la misma ubicación un directorio con un archivo app.js.
	Vincular el archivo app.js con el archivo index.html. Dentro del archivo app.js generar:
	variables que contengan un string, un array y un boolean.
	Hacer un console.log() de cada una de las variables anteriormente creadas.
	Con el navegador verificar que en la consola de las dev tools se impriman las variables. */
	console.log('-- Ejericio 1 Clase 1 - Rompehielo --');

	var name = "lean";
	var sports = ['basketball', 'soccer'];
	var booleano = true;

	console.log('String:', name);
	console.log('Array:',sports);
	console.log('Boolean:',booleano);
	console.log('Todas las variables: ',booleano,sports,booleano);
	console.log('');


	// Objetos Literales - Prueba
	console.log('-- Prueba 1 Objetos Literales --');

	var studentBasic = {
			name: "Juana", 
			lastName:"Heinz"
		};
	console.log("Nombre de studentBasic: ", studentBasic.name);

	var student = {
			name: "Martin",
			lastName:"Perez",
			pilots: {
				onePilot: {
					name: 'Pedro',
					lastName: 'Picapiedra',
				},
				twoPilot: {
					name: 'Pablo',
					lastName: 'Marmol',
				},	
			},
			fullName: function () {
				return this.name + " " + this.lastName;
			},
			elegirPiloto: function (id) {
				if (id != 'onePilot' || id != 'twoPilot') {
					return 'This pilot doesnt exist. Please try another one.';
				}
				return this.pilots[id].name + ' ' + this.pilots[id].lastName;
			},
		};

	console.log("Student's full name: ", student.fullName());

	console.log("For in para recorrer un Obj Literal: ");
	for ( var key in student) {
		if (typeof student[key] !== 'function' || typeof student[key] !== 'object' ) {
			console.log(key + ': ' + student[key]);
			console.log(key);
			console.log(student[key]);
		}
	}

	console.log('Typeof de student', typeof student);
	console.log('Typeof de student.name', typeof student.name);
	console.log('Typeof de student.fullName', typeof student.fullName());
	console.log('');


	/* Dentro del archivo app.js del punto anterior, crear:
	un objeto literal ironMan con las siguientes propiedades/métodos:
		nombre (String) - "Iron Man"	equipo (String) - "Avengers"	energía (Number) - 100
		poderes (Array) - ["Volar", "Lanzar misiles", "Disparar láser"]
		getPoder (Fn) - recibe un parámetro numérico. Retornará el poder seleccionado.
	un objeto literal Hulk con las siguientes propiedades/métodos:
		nombre (String) - "Hulk"
		equipo (String) - "Avengers"
		poderes (Array) - ["Aplastar", "Gritar", "Golpear"]
		energia (Number) - 100
		getPoder (Fn) - recibe un parámetro numérico. Retornará el poder seleccionado.
	Utilizando las funciones Math.random() y Math.floor(), generar un número entero al azar entre 0 y 2 
	para luego ser utilizado como parámetro de getPoder() y mostrar en consola el poder elegido. 
	Así mismo dependiendo del poder elegido, se deberá descontar de la energía una cantidad así:
	Para ironMan:
		Volar, descontará 10 puntos de energía.
		Lanzar misiles, descontará 15 puntos de energía.
		Disparar láser, descontará 25 puntos de energía.
	Para hulk:
		Aplastar, descontará 5 puntos de energía.
		Gritar, descontará 25 puntos de energía.
		Golpear, descontará 10 puntos de energía.
	Después de descontada la energía de cada superhéroe, mostrar en consola la energía final con la que quedó cada uno.*/
	console.log('-- Ejericio 2 Clase 1 - Objetos Literales --');
	
	var ironMan = {
			fullName: "Iron Man",
			team: "Avengers",
			powers: ["Volar", "Lanzar misiles", "Disparar láser"],
			energy: 100,
			getPower: function (id) {
						if (id >= this.powers.length) {
							return 'Este poder no existe, ingrese un numero menor';
						}
						switch(id) {
						    case 0:
						        this.energy = this.energy - 10;
						        break;
						    case 1:
						        this.energy = this.energy - 15;
						        break;
						    case 2:
						        this.energy = this.energy - 25;
						        break;
						    default:
						        this.energy = this.energy;
						}
						return this.powers[id];
			},
	};

	var hulk = {
			fullName: "Hulk",
			team: "Avengers",
			powers: ["Aplastar", "Gritar", "Golpear"],
			energy: 100,
			getPower: function (id) {
						if (id >= this.powers.length) {
							return 'Este poder no existe, ingrese un numero menor';
						}
						switch(id) {
						    case 0:
						        this.energy = this.energy - 5;
						        break;
						    case 1:
						        this.energy = this.energy - 25;
						        break;
						    case 2:
						        this.energy = this.energy - 10;
						        break;
						    default:
						        this.energy = this.energy;
						}
						return this.powers[id];
			},
	};

	var powerUsed = Math.floor(Math.random()*3);

	console.log(ironMan.fullName + " apply " + ironMan.getPower(powerUsed) + ". Energy remain: " + ironMan.energy);
	console.log(hulk.fullName + " apply " + hulk.getPower(powerUsed) + ". Energy remain: " + hulk.energy);
	console.log('');


	// Objetos Literales - Prueba
	/* Crear un objeto literal misDatos. Tu información personal deberá ser parte de sus propiedades:
		nombre
		apellido
		dni
		comidaFavorita
		edad
	Deberás recorrer el anterior objeto con un for in y mostrar por consola las propiedades y sus valores.
	Implementar el método saludar() en misDatos, para que al ser invocado imprima en consola un string así: 
	"Hola mi nombre es NOMBRE APELLIDO y tengo EDAD años".*/

	console.log('-- Prueba 2 Objetos Literales --');

	var myData = {
			name: 'Victor',
			lastName: 'Poma',
			id: '27074705',
			favoriteMeal: 'Hummus',
			age: '38',
			salutation: function () {
				return "Hola mi nombre es " + this.name + this.lastName + " y tengo " + this.age + " años."
			}
	};

	console.log(myData.salutation());
	console.log('');


	// D.O.M
	/*	El evento onclick() ocurre cuando un usuario clickea en el elemento seleccionado. 
	Para probarlo crear un <button> con  id="miBoton". En app.js capturarlo en una variable botonDePrueba, 
	y sobre esta variable implementar el siguiente código:
		botonDePrueba.onclick = function(){alert("Testeando el click")}
	¿Qué ocurre si al ver el archivo en el navegador hacemos click?	*/

	console.log('-- Ejericio 3 Clase 1 - DOM --');

	var botonDePrueba = document.getElementById('miBoton');
	console.log(botonDePrueba);
	botonDePrueba.onclick = function(){alert("Testeando el click")}
	console.log('');



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




	// D.O.M.


	/* En el html, crear 10 párrafos (<p>) con texto aleatorio. En app.js capturar todos los párrafos del documento.
	Hacer una función que, tomando como parámetro a los párrafos capturados, Recorra los mismos y:
		Les cambie el color a red.
		Genere que la tipografía esté en negrita.
		Genere que el texto esté con alineación a la mitad.
	El proceso anterior deberá ejecutarse SOLAMENTE para los párrafos con número par.
	La función deberá retornar la cantidad de elementos <p> que no fueron afectados con estos cambios de estilo.
	Mostrar en consola: Párrafos que no se vieron afectados: N.*/
	console.log('-- Ejericio XX Clase 2 working with pharraghaps --');

	var ps = document.querySelectorAll('p');
	// console.log(ps[1]);

	function makeRed (array) {
		var	count = 0;
		for (var i = 0; i < array.length; i++) {
			if (i % 2) {
				array[i].style.color = 'red';
				//array[i].style.color = 'red';
				//array[i].style.color = 'red';
				console.log(array[i]);
			} else {
				count++
			}
		}
		return console.log('Párrafos que no se vieron afectados: ' + count);
	}

	makeRed(ps);
	console.log('');




 	/* Creando los archivos index.html y app.js. Dentro del archivo index.html generar:
	Un <h1> con cualquier contenido. 10 elementos <p> con contenido aleatorio.
	Un lista <ul> con 7 elementos <li> con contenido de relleno. 
	En nuestro archivo app.js:
	Capturar a todos los elementos <li>. Luego recorrerlos e imprimir en consola cada uno de ellos. WARNING: NO usar querySelectorAll.
	Capturar el padre de los elementos anteriores (<li>) y mostrarlo en consola.
	Capturar al <h1> y cambiar su contenido interno por el siguiente: <em>Javascript is the best my friends!</em>.
	Capturar a todos los <p>, recorrerlos y cambiar el contenido interno de los elementos impares por el siguiente: Párrafo número N: <a href="#">enlace generado desde JS</a>. Donde N será el número de párrafo correspondiente.*/

	console.log('-- Ejericio 3 Clase 3 - DOM --');
	console.log('');


	var firstHeadline = document.createElement("h1"); 
	var textFirsthealine = document.createTextNode("Este es el contenido del h1");       // Create a text node
	firstHeadline.appendChild(textFirsthealine);       // Append the text to <button>
	document.body.appendChild(firstHeadline);        // Append <button> to <body>


	var fruits, text, fLen, i;
	fruits = ["Banana", "Orange", "Apple", "Mango"];
	fLen = fruits.length;
	text = "<ul>";
	for (i = 0; i < fLen; i++) {
	    text += "<li>" + fruits[i] + "</li>";
	}
	text += "</ul>";





};
