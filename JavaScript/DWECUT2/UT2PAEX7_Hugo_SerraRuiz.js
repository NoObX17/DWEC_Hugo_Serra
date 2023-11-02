class Hospital {
    constructor(nom, ciutat, numPacients){
        this.nom = nom;
        this.ciutat = ciutat;
        this.numPacients = numPacients;
        this.pacients = [];
    }

    altaPacient(dni){
        if (Pacient.DNI === dni){
            this.pacients.splice();
            this.numPacients--;
        }
    }
}

class Pacient {
    constructor(DNI, nom, malaltia){
        this.DNI = DNI;
        this.nom = nom;
        this.malaltia = malaltia;
    }
}