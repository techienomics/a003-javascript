var d = document;

var elegido = d.querySelector('#elElegido');

var padreElegido = elegido.parentElement;

var hijosDelPadre = padreElegido.children;

for (var elem of hijosDelPadre) {
	elem.style.border = 'dotted 2px red';
	elem.innerHTML += ' JS la rompe <br><br>';
}

console.log(hijosDelPadre);

var elH2 = d.querySelector('h2');
console.log(elH2);
console.log('innerText', elH2.innerText);
console.log('innerHTML', elH2.innerHTML);

elH2.innerHTML = 'Viernes de <em>joda</em>';

// d.querySelector('body').innerText = '';

var lista = d.createElement('ul');

document.querySelector('body').append(lista);

var cant = Number(window.prompt('Cuantos LI queres?'));

for (var i = 0; i <= cant; i++) {
	var nuevoLi = d.createElement('li');
	nuevoLi.innerHTML = 'Nuevo li';
	if (i % 3 === 0) {
		nuevoLi.setAttribute('id', 'sarasa');
	}
	nuevoLi.setAttribute('class', 'red');
	nuevoLi.setAttribute('title', 'Hola mundo');
	console.log(nuevoLi.getAttribute('class'));
	console.log(nuevoLi.getAttribute('href'));
	lista.append(nuevoLi);
}

var losLi = lista.children;

console.log(losLi);

for (var x = 0; x < losLi.length; x++) {
	if (x === 6) {
		lista.removeChild(losLi[x]);
	}
	losLi[x].onclick = function () {
		if (this.hasAttribute('id')) {
			console.log('Tiene el id');
		} else {
			console.log('no tiene id');
		}
		if (this.getAttribute('class') === 'red') {
			this.setAttribute('class', 'green');
		} else {
			this.setAttribute('class', 'red');
		}
	};
}
