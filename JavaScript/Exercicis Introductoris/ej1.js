//Pedimos al usuario la edad
var respuesta = prompt("Introduce una edad: ");

//Comprobacion de la edad para los distintos casos posibles
if (respuesta<0){
    alert("La edad introducida es imposible");
}

if (respuesta>=0 && respuesta <=12){
    alert("0-12: Nen");
}

if (respuesta>=13 && respuesta <=18){
    alert("13-18: Jove");
}

if (respuesta>=27 && respuesta <=60){
    alert("27-60: Adult");
}

if (respuesta>60){
    alert(">60: Jubilat");
}