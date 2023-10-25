//TABLA DE MULTIPLICAR DEL 7
document.write("<h1>TABLA DE MULTIPLICAR DEL 7</h1>");
for (let i = 0; i<=70; i+=7){
    document.write(i);
    document.write("<br>");
}
document.write("<h1>TABLA DE SUMAR DEL 8</h1>");
var numsuma = 8;
var suma = 1;

do {
    var resultado = numsuma + suma;
    document.write("La suma de " +numsuma+ " y " + suma + " da como resultado:  " + resultado + "<br>");
    suma++;
} while (suma <= 10);

document.write("<h1>TABLA DE DIVIDIR DEL 9</h1>");
var num = 9;
var div = 1;

while (div <= 10) {
    var res = num / div;
    document.write("La division entre "+ num + " y " + div + " da como resultado:  " + res + "<br>");
    div++;
}

document.write("<h1>125/8</h1>");
const op1 = 125 >> 3 ;
document.write(op1);

document.write("<h1>40x4</h1>");
const op2 = 40 << 2 ;
document.write(op2);

document.write("<h1>25/2</h1>");
const op3 = 25 >> 1 ;
document.write(op3);

document.write("<h1>10x16</h1>");
const op4 = 10 << 4 ;
document.write(op4);
