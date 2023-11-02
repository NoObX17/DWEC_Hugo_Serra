class Colegi {
    constructor(nom, numeroAules, numeroAlumnes) {
        this.nom = nom;
        this.numeroAules = numeroAules;
        this.numeroAlumnes = numeroAlumnes;
        this.alumnes = [];
    }
    afegirAlumne(alumne) {
        this.alumnes.push(alumne);
    }

    modificarMitjana(dni, nota){
        if (Alumne.DNI == dni){
            Alumne.notaMitjana = nota;
        }
    }
}

class Alumne {
    constructor(DNI, nom, notaMitjana) {
        this.DNI = DNI;
        this.nom = nom;
        this.notaMitjana = notaMitjana;
    }
}
// Uso
let colegio = new Colegi("Cesur", 2, 10);

let alumno1 = new Alumne("43222816C", "Hugo Serra", 7);
let alumno2 = new Alumne("45817902D", "David Tous", 6);

console.log(alumno1);
colegio.modificarMitjana("43222816C", 9);
console.log(alumno1);

