var myString = 'Hello';
var myArray = ['Orange', 'Banana', 'Lemon'];
var myBoolean = true;

console.log('String:', myString);
console.log('Array:', myArray);
console.log('Boolean:', myBoolean);
console.log('=========');
console.log(myString);
console.log(myArray);
console.log(myBoolean);
console.log('=========');
console.log(myString, myArray, myBoolean);

var autoDeCarreras = {
	marca: 'Ferrari',
	kilometraje: 345.654,
	color: 'Rojo',
	arrancar: function () {
		return 'Brrunnnn Brunnm';
	},
	pilotos: {
		uno: {
			nombre: 'Juana',
			apellido: 'Heinz'
		},
		dos: {
			nombre: 'Pedro',
			apellido: 'Picapiedra'
		}
	},
	elegirPiloto: function (id) {
		if (id !== 'uno' && id !== 'dos') {
			return 'No existe ese piloto';
		}

		return this.pilotos[id].nombre;
	}
};

for (var key in autoDeCarreras) {
	if (typeof autoDeCarreras[key] !== 'function' && typeof autoDeCarreras[key] !== 'object') {
		console.log(key + ': ' + autoDeCarreras[key]);
	}
}
