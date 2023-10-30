var fecha = new Date();

diacumple = prompt("Dime el dia de tu cumpleaños: ");
mescumple = prompt("Dime el mes de tu cumpleaños: ");

//Restamos 1 al mes para adecuarlo a la proporcion de los meses (0,11)
mescumple = mescumple-1;

//const cumple = new Date(2023,mescumple,diacumple);
//diacumple = cumple.getDay();
//document.write(diacumple);

for (let i = fecha.getFullYear(); i <2100 ; i++){
    
    var cumple = new Date(i,mescumple,(diacumple-1));
    diacumple = cumple.getDay();

    if (diacumple == 0){
        document.write(i);
        document.write("<br>");
    }
}