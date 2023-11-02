class Aeroport {
    constructor(nom, ciutat, numeroVolsDiaris) {
        this.nom = nom;
        this.ciutat = ciutat;
        this.numeroVolsDiaris = numeroVolsDiaris;

    }

    modificarArribada(codigo, hora){
        if (Vol.codi == codigo){
            Vol.hora_arribada = hora;
        }
    }

    modificarSortida(codigo, hora){
        if (Vol.codi  == codigo){
            Vol.hora_sortida = hora;
        }
    }

    comprobarSortida(Vol){
        if (Vol.hora_sortida > Vol.hora_arribada){
            return true;
        }
        return false;
    }
}

class Vol {
    constructor(codi, hora_sortida, hora_arribada) {
        this.codi = codi;
        this.hora_sortida = hora_sortida;
        this.hora_arribada = hora_arribada;
    }
}

let aeropuerto = new Aeroport("Aeropuerto Palma de Mallorca", "Palma", 1000);

let vuelo1 = new Vol("UX9671", "7:30", "8:55");
let vuelo2 = new Vol("UX5543", "11:30", "13:30");