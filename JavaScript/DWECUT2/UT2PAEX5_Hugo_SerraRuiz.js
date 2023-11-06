/*Clase colegi con los atributos pedidos por el enunciado (nom, numeroAules y numeroAlumnes). 
Con un array tambien para poder almacenar un listado de alumnos*/
class Colegi {
    constructor(nom, numeroAules, numeroAlumnes) {
        this.nom = nom;
        this.numeroAules = numeroAules;
        this.numeroAlumnes = numeroAlumnes;
        this.alumnes = [];
    }
    //Metodo para añadir alumnos al array de alumnos de la clase Colegi
    afegirAlumne(alumne) {
        this.alumnes.push(alumne);
    }
    //Metodo para modificar la media del alumno, buscandolo en el array de alumnos y haciendo la llamada al metodo de la clase Alumne.
    modificarMitjanaAlumne(dni, nota){
        for (let i = 0; i < this.alumnes.length; i++) {
            if (this.alumnes[i].DNI == dni){
                this.alumnes[i].modificarMitjana(nota);
                return;
            }
        }
    }
}

//Clase alumno con los atributos pedidos en el enunciado (DNI, nom, notaMitjana) y con un metodo para modificar la nota media.
class Alumne {
    constructor(DNI, nom, notaMitjana) {
        this.DNI = DNI;
        this.nom = nom;
        this.notaMitjana = notaMitjana;
    }
    //Metodo para modificar la nota media cambiandola por la nueva nota.
    modificarMitjana(nota){
        this.notaMitjana = nota;
    }
}

//Instancia de las clases y llamada a los metodos
let colegio = new Colegi("Cesur", 2, 10);

let alumno1 = new Alumne("43222816C", "Hugo Serra", 7);
let alumno2 = new Alumne("45817902D", "David Tous", 6);

colegio.afegirAlumne(alumno1);
document.write("Datos del alumno 1 previamente al metodo modificarMitjanaAlumne: "+JSON.stringify(alumno1)+"<br>");
colegio.modificarMitjanaAlumne("43222816C", 9);
document.write("Datos del alumno 1 una vez usado el metodo modificarMitjanaAlumne: "+JSON.stringify(alumno1)+"<br>");

