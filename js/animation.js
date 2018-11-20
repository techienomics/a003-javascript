// Clase 1 de JavaScript

window.onload = function () {

	/* JavaScript animations are done by programming gradual changes in an element's style. 
	The changes are called by a timer. When the timer interval is small, the animation looks continuous. 
	The basic code is: */

	function myMove() {
	    var elem = document.getElementById("animate"); 
	    var pos = 0;
	    var id = setInterval(frame, 1); // The changes are called by a timer
	    function frame() {
	        if (pos == 350) {
	            clearInterval(id);
	        } else {
	            pos++; 
	            elem.style.top = pos + 'px'; 
	            elem.style.left = pos + 'px'; 
	        }
	    }
	}

	myMove();


	var name = 'Victor';
	var lastName = 'Poma';
	var id2 = setInterval(sayHi, 1, name, lastName); // pase de parametros
	function sayHi() {
		var i = 0;
		while(i < 2) {
			alert("Hello " + name + ' ' + lastName);
			i++;
		} clearInterval(id2);
	}

	// timmer

	var myVar = setInterval(myTimer, 1000);

	function myTimer() {
	    var d = new Date();
	    var t = d.toLocaleTimeString();
	    document.getElementById("demo1").innerHTML = t;
	}

	document.getElementById('demo2').innerHTML = Date()

	// advance bar

	function move() {
	  var elem = document.getElementById("myBar"); 
	  var width = 0;
	  var id3 = setInterval(frame, 10);
	  function frame() {
	    if (width == 100) {
	      clearInterval(id3);
	    } else {
	      width++; 
	      elem.style.width = width + '%'; 
	    }
	  }
	}

	move();


	// change color

	// var myColor = setInterval(setColor, 300);

	function setColor() {
	    var x = document.body;
	    x.style.backgroundColor = x.style.backgroundColor == "white" ? "pink" : "white";
	}

	function stopSetInterval(varSetInterval) {
	    clearInterval(varSetInterval);
	}

    //stopSetInterval(myColor);




};
