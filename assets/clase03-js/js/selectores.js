window.onload = function () {
	var elContenedor = document.querySelector('.container');
	var elArticulo = document.querySelector('#box');
	var elArticulo2 = document.getElementById('box');

	elContenedor.style.backgroundColor = 'pink';
	elContenedor.style.color = 'red';
	elContenedor.style.padding = '20px';

	var losContenedores = document.querySelectorAll('.container');

	for (var i = 0; i < losContenedores.length; i++) {
		losContenedores[i].style.border = 'solid 5px green';
		losContenedores[i].style.margin = '40px';
		losContenedores[i].style.padding = '40px';
		losContenedores[i].style.borderRadius = '50%';
	}

	console.log(elContenedor);
	console.log(elArticulo);
	console.log(elArticulo2);
	console.log(losContenedores);
};
