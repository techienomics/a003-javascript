// Clase 3 JavaScript

window.onload = function () {


	// Objeto Window
	/* Crear un archivo gastos.html y gastos.js. Importante, window.onload. Usando los métodos prompt(), 
	confirm() y alert(), generar un reporte de gastos diarios de una familia. Funciona de la siguiente manera: 
	Lo primero es preguntarle al visitante ingresa al documento si quiere iniciar. 
		Si la respuesta es negativa, deberá muestra una alerta "Gracias por haber venido" y luego será direccionado al sitio web de Netflix.
		Ahora, si la respuesta es positiva, inicia el proceso, 
		Validar que el dato ingresado sea un número (isNaN()) y no sea inferior a 3; de NO ser un número deberá 
		alertar que requiere número y volverá a preguntar por la cantidad de integrantes.
	Pide la cantidad de integrantes de la familia, para c/u pide nombre y luego la cifra que gastó.
		Tener en cuenta de validar que: El nombre no puede estar vacío.
		Los gastos no puede ser un texto ni estar vacío.
		En cualquiera de esos casos, alertar del error y volver a pedir el dato. Al final se deberá generar un Array de Objetos Literales cada uno con la propiedad nombre y valor. Ejemplo:
			integrantes = [
				{nombre: "Ada", gastos: 300},
				{nombre: "Tim", gastos: 570},
				{nombre: "Vincent", gastos: 80},
			];
	Al final mostrar: c/ nombre con cifra, el que más gastó y el que menos gastó y el total y promedio familia.*/ 
/*	
	console.log('-- Ejericio 1 Clase 3 - Objeto Window --');


	function reductor (acum, elem){
		return acum + elem;
	}

	function stats (array) {
		var elem = [];
		for (var i = 0; i < array.length; i++) {
			object = array[i];
			for (key in object) {
				elem[i] = object[key];
			}
		}
		console.log(elem);
		var sum = elem.reduce(reductor);	// console.log('sum',sum);
		var average = sum / elem.length;	// console.log('average',average);
		var max = Math.max(...elem);		// console.log('max',max);
		var min = Math.min(...elem);		// console.log('min',min);
		var results = [sum, average, max, min];
		return results;
	}

	var start = window.confirm("Desea iniciar con el reporte de gastos (SI) o ver Netflix(NO)");

	if (start) {

		// console.log("prueba que start anda bien");

		do {
			var familyMembers = window.prompt("Cuantos miembros tiene su familia?");
				family = Number(familyMembers);
			if (family === "" || isNaN(family) || family === 0 && family > 2 ) {  // si NaN pregunta si no es un numero
				alert("no dejes el campo vacio")
			} else {
				var confirma = window.confirm("Confirma que tu familia tiene " + family + "miembros.");
				console.log(family);
				console.log(confirma);	
			}
		} while (family === "" || isNaN(family) || family === 0);

		var familyData = [];

		for (i = 0; i < family; i++) {

			do {
				var member = window.prompt("Decime tu nombre");
				if (member === "") {
					alert("no dejes el campo vacio")
				} else {
					var confirma = window.confirm("Confirmas que tu nombre es " + member);
					console.log(member);
					console.log(confirma);	
				}
			} while (!confirma || confirma === "");

			do {
				var expenseMember = window.prompt("Decime tu gasto mensual");
					expense = Number(expenseMember);
				if (expense === "" || isNaN(expense) || expense === 0 ) {  // si NaN pregunta si no es un numero
					alert("no dejes el campo vacio")
				} else {
					var confirma = window.confirm("Confirmas que tu gasto mensual fue " + expense);
					console.log(expense);
					console.log(confirma);	
				}
			} while (expense === "" || isNaN(expense) || expense === 0);

			var object = {
					name: member,
					lastName: expense
				};

			familyData.push(object); // familyData.push({ name: visitante,lastName: expense});

		}

		console.log("El array de objetos literales es:");
		console.log(familyData);

		var stats = stats(familyData);
		console.log("Los valores totales, promedio, max y min son:");
		console.log(stats);

		console.log("El gasto total de la familia fue " + stats[0]);
		console.log("El gasto promedio de la familia fue " + stats[1]);
		console.log("El integrante que mas gasto fue " + stats[2]);
		console.log("El integrante que menos gasto fue " + stats[3]);

	} else {
		console.log("Gracias por haber participado.");
		console.log("Tu actual ubicacion es: " + window.location.href);
		// console.log(window.location.search); que es esto?
		console.log("Ahora seras redireccionado a Netflix, muchas gracias.");
		window.location.href = "https://www.netflix.com";
	}
	console.log('');

*/
	// Ejercicio Integrador
 	/* Teniendo la funcionalidad existente, vamos a mostrar los resultados dentro html. ATENCIÓN: todo lo siguiente deberá ser generado desde javascript,
	Generar un título con el texto "Reporte de gastos familiares".
	Generar una lista dentro de la cual se muestre:
		El nombre del integrante que más gastó junto con su gasto.
		El nombre del integrante que menos gastó junto con su gasto.
		Los gastos de toda la familia.
		El promedio de gastos del día.
	Todos los elementos de lista, deberán tener el atributo title con el mismo texto que muestra cada uno.
	Generar un <button> con el texto "¿Nos pasamos del presupuesto?" el cual, al ser clicado, 
	muestre un texto llamativo diciendo si el presupuesto diario fue superado, 
	teniendo en cuenta que para toda la familia el presupuesto máximo diario es de $1200.
	Generar otro <button> que al ser clickeado, asigne si no existe y elimine si existe, la clase dark-theme al <body>. 
	Crear un css que define todo el set de estilos para dicha clase. */

	console.log('-- Ejercicio Integrador Clase 3 --');

	var firstHeadline = document.createElement("h1"); 
	var textFirsthealine = document.createTextNode("Reporte de gastos familiares");       // Create a text node
	firstHeadline.appendChild(textFirsthealine);       // Append the text to <button>
	document.body.appendChild(firstHeadline);        // Append <button> to <body>


	console.log('');



};
