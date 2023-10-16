var lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B ', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'] ;

numero = prompt("Introduce tu numero de DNI: ");
if (numero < 0 || numero > 99999999){
    alert ("Numero de DNI no es valido");
}

resto = numero%23;

letra = prompt("Introduce la letra de tu DNI: ");

if (lletres[resto] == letra){
    alert("El numero y la letra del DNI son correctos")
}else{
    alert("La letra del DNI que has introducido es incorrecta")
}