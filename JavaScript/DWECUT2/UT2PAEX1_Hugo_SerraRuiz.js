fila1 = [4,1,3,8,2,5,6,7,9];
fila2 = [5,6,7,1,4,9,8,3,2];
fila3 = [2,8,9,7,3,6,1,4,5];
fila4 = [1,9,5,4,6,2,7,8,3];
fila5 = [7,2,6,9,8,3,5,1,4];
fila6 = [3,4,8,5,1,7,2,9,6];
fila7 = [8,5,1,6,9,4,3,2,7];
fila8 = [9,7,2,3,5,8,4,6,1];
fila9 = [6,3,4,2,7,1,9,5,8];
sudoku = [fila1, fila2, fila3, fila4, fila5, fila6, fila7, fila8, fila9];

sumafila = 0;
sumacolumna = 0;
contadorFila = 0;
contadorColumna = 0;


resultado = esSudokuCorrecte(sudoku);
document.write("El sudoku es: "+resultado);




function esSudokuCorrecte(sudoku) {
    
    //Recorremos las filas del sudoku
    for (let i = 0; i < sudoku.length; i++) {
        let suma_fila = 0;

        //Calcular la suma de los numeros de la fila
        for (let j = 0; j < sudoku[i].length; j++) {
            suma_fila += sudoku[i][j];
        }

        //Verificación de la suma de la fila para ver si es 45
        if (suma_fila !== 45) {
            return false;
        }
    }

    //Recorremos las columnas del sudoku
    for (let j = 0; j < sudoku[0].length; j++) {
        let suma_columna = 0;

        //Calcular la suma de los numeros de la columna
        for (let i = 0; i < sudoku.length; i++) {
            suma_columna += sudoku[i][j];
        }

        //Comprobacion de la suma de la columna para ver si es 45
        if (suma_columna !== 45) {
            return false;
        }
    }

    //Si llega hasta aqui quiere decir que se cumple todo por tanto el sudoku es correcto
    return true;
}