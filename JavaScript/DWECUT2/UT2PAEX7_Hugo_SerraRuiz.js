/*Clase Hospital con los atributos explicados en el enunciado (nom, ciutat, numPacients) y un array para almacenar los pacientes. 
Contiene dos metodos (afegirPacients y altaPacient).*/
class Hospital {
    constructor(nom, ciutat, numPacients){
        this.nom = nom;
        this.ciutat = ciutat;
        this.numPacients = numPacients;
        this.pacients = [];
    }
    //Metodo para añadir pacientes al array pacients.
    afegirPacients(pacient){
        this.pacients.push(pacient);
    }

    //Metodo para dar de alta a un paciente introduciendo su DNI.
    altaPacient(dni){
        for (let i = 0; i < this.pacients.length; i++) {
            if (this.pacients[i].DNI == dni){
                this.pacients.splice();
                this.numPacients--;
                console.log("Alta de paciente realizada");
                return;
            }
            console.log("error");
        }
    }
}

//Clase paciente con los atributos pedidos en el enunciado (DNI, nom, malaltia).
class Pacient {
    constructor(DNI, nom, malaltia){
        this.DNI = DNI;
        this.nom = nom;
        this.malaltia = malaltia;
    }
}

//Instancia de las clases y prueba de los metodos creados.
let hospital = new Hospital("Hospital General", "Palma", 700);
let paciente1 = new Pacient("43222816C", "Hugo", "Resfriado fuerte");
let paciente2 = new Pacient("44321234J", "David", "Lesion muscular");
let paciente3 = new Pacient("49875291B", "Marc", "Covid");

hospital.afegirPacients(paciente1);
hospital.afegirPacients(paciente2);
hospital.afegirPacients(paciente3);

console.log(hospital.numPacients);
console.log(hospital.pacients[0]);
hospital.altaPacient("43222816C");
console.log(hospital.numPacients);
