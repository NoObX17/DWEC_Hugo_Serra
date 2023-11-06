/*Clase Aeroport con los atributos pedido en el enunciado (nom, ciutat y numeroVolsDiaris) y metodos para añadir vuelos y modificar
horas tanto de salida como de llegada de los vuelos*/
class Aeroport {
    constructor(nom, ciutat, numeroVolsDiaris) {
        this.nom = nom;
        this.ciutat = ciutat;
        this.numeroVolsDiaris = numeroVolsDiaris;
        this.vols = [];

    }
    //Metodo para añadir vuelos al array de vols.
    afegirVols(vol) {
        this.vols.push(vol);
    }

    //Metodo para modificar la llegada de un vuelo introduciendo su codigo y la nueva hora.
    modificarArribada(codigo, hora){
        for (let i = 0; i < this.vols.length; i++) {
            if (this.vols[i].codi == codigo){
                this.vols[i].setArribada(hora);
                return;
            }
        }
    }

    //Metodo para modificar la salida de un vuelo introduciendo su codigo y la nueva hora.
    modificarSortida(codigo, hora){
        for (let i = 0; i < this.vols.length; i++) {
            if (this.vols[i].codi == codigo){
                this.vols[i].setSortida(hora);
                return;
            }
        }
    }
    
    //metodo para comprobar si la salida es correcta y se realiza antes que la llegada
    comprobarSortida(Vol){
        if (Vol.hora_sortida < Vol.hora_arribada){
            return true;
        }
        return false;
    }
}
//Clase de vuelo con los atributos pedidos en el enunciado (codi, hora_sortida, hora_arribada) y con dos set para la salida y la llegada
class Vol {
    constructor(codi, hora_sortida, hora_arribada) {
        this.codi = codi;
        this.hora_sortida = hora_sortida;
        this.hora_arribada = hora_arribada;
    }
    //SETTERS
    setArribada(hora){
        this.hora_arribada = hora;
    }
    setSortida(hora){
        this.hora_sortida = hora;
    }
}

//Instanciacion de las clases y prueba de los metodos
let aeropuerto = new Aeroport("Aeropuerto Palma de Mallorca", "Palma", 1000);

let vuelo1 = new Vol("UX9671", "7:30", "8:55");
let vuelo2 = new Vol("UX5543", "11:30", "13:30");

aeropuerto.afegirVols(vuelo1);
aeropuerto.afegirVols(vuelo2);
console.log(vuelo1);
console.log(vuelo2);
aeropuerto.modificarArribada("UX9671", "9:55");
aeropuerto.modificarSortida("UX5543", "11:55");
console.log(aeropuerto.comprobarSortida(vuelo1));
console.log(vuelo1);
console.log(vuelo2);