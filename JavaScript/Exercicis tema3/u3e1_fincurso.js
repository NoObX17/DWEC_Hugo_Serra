var fecha = new Date();
const fincurso = new Date();


//Obtenemos el dia de hoy
var hoy = fecha.getDate();
//Obtenemos el mes en el que estamos
var mes = fecha.getMonth();

//Hacemos el set para la fecha de fin de curso
fincurso.setDate(21);
fincurso.setMonth(5);
//Obtenemos dia y mes y los almacenamos en variables
diafin = fincurso.getDate();
mesfin = fincurso.getMonth();


//Inicializamos el contador de dias en 0
contdias = 0;

//BUCLE FOR PARA CONTAR LOS DIAS DE TODOS LOS MESES RESTANTES HASTA DICIEMBRE
for (let i = mes; i<12 ; i++){
    var data = new Date(2023,(i+1),0);
    diasmes = data.getDate();
    contdias = contdias + diasmes;
    console.log(contdias);
}
//BUCLE FOR PARA CONTAR LOS DIAS DESDE ENERO HASTA EL MES DE LA FECHA FINAL
for (let i = 0; i<(mesfin+1) ; i++){
    var data = new Date(2023,(i+1),0);
    diasmes = data.getDate();
    contdias = contdias + diasmes;
    console.log(contdias);
}


const ultimomes = new Date(2023,(mesfin+1),0);
//Obtenemos el numero de dias que tiene el ultimo mes
diasmesfin = ultimomes.getDate();
//Restamos en el dia maximo de la fecha del ultimo mes
diasmesfin = diasmesfin - diafin;
//console.log(diasmesfin);

//Restamos al contador el dia de hoy y los dias extra que "sobran" del ultimo mes
contdias = (contdias - hoy);
contdias = (contdias - diasmesfin);
console.log("Dias restantes hasta final de curso: "+contdias);