function mostrar() {
	//tomo la edad  
	let edad;
	edad = document.getElementById("txtEdad").value;

	edad = parseInt(edad);

	if (edad < 13 || edad > 17) {
		alert("No es adolecente");
	}


}//FIN DE LA FUNCIÓN