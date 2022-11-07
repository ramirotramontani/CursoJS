function mostrar() {
	//tomo la edad  
	let edad;
	edad = document.getElementById("txtEdad").value;

	edad = parseInt(edad);

	if (edad >= 18) {
		alert("Es mayor de edad");
	}
	else {
		if (edad < 13) {
			alert("Es menor de edad");

		}
		else {
			alert("Es adolecente")

		}
	}
}
//FIN DE LA FUNCIÓN