// Clase 2 JavaScript

window.onload = function () {

	// Iteradores
	// Crear un archivo index.html y vincularlo s app.js con window.onload.
	console.log('-- Ejericio 1 Clase 2 - Iteradores --');
	console.log('');

	/* Usando un for generar: La tabla de multiplicar del 3 (hasta 135). Imprimir por consola el resultado:
	3 x 1 = 3  |  3 x 2 = 6 | Y así hasta hasa menor a 135 */
	console.log('-- using for --');

	for (var i = 0; 3*i < 135 ; i++) {
		console.log(3*i);
	}
	console.log('');


	/* Usando un switch: Declarar una variable dado y asignarle como valor un número aleatorio entre 1 y 6.
	Dentro del switch, hacer los cases necesarios para imprimir por consola lo siguiente:
	Si el número es -> El número X es par | Si el número es impar -> El número X es impar */
	console.log('-- using switch --');

	var dado = Math.ceil(Math.random()*7);
	switch (dado){
		case 1: 
		case 3:
		case 5:
			console.log("El número " + dado + " es impar");
			break;
		case 2: 
		case 4:
		case 6:
			console.log("El número " + dado + " es par");
			break;
		default: console.log(dado + " No es ninguno de estos numeros");
	}
	console.log('');


	/* Usando un while o do/while: Guardar en una variable aleatorio un número random entre el 1 y 37.
	Hacer que el bucle se ejecute mientras que el número NO sea el 19. Cuando el aleatorio sea el 19, 
	cortar el bucle e imprimir por consola: Salió el número 19, se tomaron X intentos para ello. 
	En donde X sea la cantidad de veces que se ejecutó el bucle hasta obtener el número deseado. */
	console.log('-- using while or do/while --');

	var count = 1;
	var number = Math.ceil(Math.random()*37);
	while (number !== 19) {
		count++;
		console.log(number);
		var number = Math.ceil(Math.random()*37);
	}; console.log("Using While: Salió el número 19 en " + count + " intentos.");
	console.log('');

	var count = 0;
	do {
		count++;
		var number = Math.ceil(Math.random()*37);
		console.log(number);
	}
	while (number !== 19);
	console.log("Using DoWhile: Salió el número 19 en " + count + " intentos.");
	console.log('');


	/* Usando un for y un continue: Generar un bucle que itere desde 1 a 100. En una variable tipo Array pares
	ir guardando mediante push() Solamente los números pares. Finalmente mostrar en consola el Array pares.*/
	console.log('-- using for & continue --');

	var odds = [];
	for (var i = 1; i <= 100; i++) {
		if (i % 2 === 0) {
			odds.push(i);
		}
	}
	console.log('Array odds is ', odds);
	console.log('');


	// Funciones
	console.log('-- Ejericio 2 Clase 2 - Funciones --');
	
	/* Dentro del archivo app.js del punto anterior, crear:
	un objeto literal estudiante con las siguientes propiedades y sus valores:
		nombre (String)		curso (String)		dni (Number)		email (String)
	Crear una función fromObjectToArray que reciba un parámetro (objeto literal), y que retorne los valores 
	de cada una de las propiedades de ese objeto en Array. Mostrar en consola el Array que retorna.
	Crear una función cambiarColorDeFondoDelBody que reciba un parámetro (string) nombre del color ó 
	valor hexadecimal) y que cambie el color de fondo de la etiqueta <body>. 
	El cambio sólo deberá realizarse, si el valor pasado como parámetro es diferente a green ó #0f0 ó #00ff00. 
	Si el cambio de color es posible, la función retornará true. De lo contrario retornará false. 
	Ejecutar la función y pasarle como parámetros diferentes valores. 
	Mostrar en consola si el cambio de color fue posible.*/

	var student = {
			nombre: "Victor",
			curso: "Fullstack",
			dni: "27.974.705",
			email: "vitipoma@gmail.com",
	};

	function fromObjectToArray (object) {
		var propertis = [];
		var values = [];
		for (var key in object) {
			propertis.push(key);
			values.push(object[key]);
		}
		return console.log(propertis, values);
	}

	console.log('From Object to Array:');
	fromObjectToArray(student);
	console.log('');

	function cambiarColorDeFondoDelBody (string) {
		var tag = document.querySelector('body');
		if (string !== "green" || string !== "#0f0" || string !== "#00ff00" ) {
		 	console.log("false: El cambio de color fue posible");
		 	tag.style.background = string;
		} else {
			console.log("true: El cambio de color no fue posible");
		}
	}

	cambiarColorDeFondoDelBody("green");
	cambiarColorDeFondoDelBody("pink");
	console.log('');
	

	// Métodos de Array
	console.log('-- Ejericio 3 Clase 2 - Metodos de Array --');
	
	/* Dentro del archivo app.js, crear: Un array de números del 1 al 20.
	Utilizando el array del ejercicio anterior, usar el método map() de tal forma de obtener una 
	variable raizCuadrada que contenga la raíz cuadrada de c/u de los elementos del Array anterior. 
	Utilizar la función Math.sqrt para la raíz cuadrada.*/

	var numbers = [];
	for (var i = 0; i < 20; i++) {
		numbers[i] = i+1;
	}

	function sqrtArray(array) {
	    // var x = document.getElementById("demo")
	    //x.innerHTML = numbers.map(Math.sqrt);
	    return array.map(Math.sqrt);
	}

	console.log('Original array: ', numbers);
	console.log('Mapped array: ', sqrtArray(numbers));
	console.log('');


	/* Hemos recibido un código anónimo cuyo mensaje queremos descifrar. Las únicas pistas que tenemos son:
	. filter() y typeof.
	. "Si descifrar la altura quieres, sumar todos los números debes". ¿Qué método de Array podemos usar?.
	. "Si el nombre de la calle necesitás, omitir todos los números deberás".
		Debemos mostrar en consola el nombre de la calle junto con su altura. El código es:
	        var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 
	        		9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 
	        		5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 
	        		3, 2, "l", 3, "a", 4, "v", 5, "e", 6];*/
	console.log('-- codigo enigma --');

	var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, 
				"e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, 
				"a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, 
				"v", 5, "e", 6];

	function reductor (acum, elem){
		return acum + elem;
	}

	var alturaCalle = enigma.filter(function (elem){
		return typeof elem == "number";
	}).reduce(reductor);

	var nombreCalle = enigma.filter(function (elem){
		return typeof elem == "string";
	}).reduce(reductor);

	console.log('La direccion contenida en el codigo es: ' + nombreCalle + ' ' + alturaCalle);
	console.log('');

