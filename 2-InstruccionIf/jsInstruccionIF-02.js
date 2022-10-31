function mostrar()
{
	//tomo la edad  
	let edad;
	edad = document.getElementById("txtEdad").value;

	edad = parseInt(edad);

	if(edad >= 18){
		alert("Mayor de edad");
	}
	

}//FIN DE LA FUNCIÓN