/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  let Dividendo;
  let Divisor;

  Dividendo = document.getElementById("txtDividendo").value;
  Divisor = document.getElementById("txtDivisor").value;

 Dividendo = parseInt(Dividendo);
Divisor = parseInt(Divisor);

dividir = Dividendo % Divisor;

alert("el resto es " + dividir);
}
