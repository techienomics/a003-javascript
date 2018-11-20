do {
	var edad = window.prompt('Decime tu edad');
	edad = Number(edad);
	if (edad === '' || isNaN(edad) || edad === 0) {
		window.alert('Ey, no dejés el campo vacío e ingresá solo números');
	} else {
		var confirma = window.confirm('Tu edad  es ' + edad + ' ¿?');
	}
} while (!confirma || edad === '' || isNaN(edad) || edad === 0);

console.log(window.location.href);
