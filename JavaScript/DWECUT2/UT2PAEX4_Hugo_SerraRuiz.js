const iniciDeJornada = "07:30";
const finalDeJornada = "17:45";

function agendarReunio(horaDInici, duracioEnMinuts) {
    var hora = horaDInici.split(":");
    var minutos = (+hora[0])*60 + (+hora[1]);

    if (horaDInici < iniciDeJornada || horaDInici > finalDeJornada){
        return false;
    }else {
        sumaMinutos = minutos + duracioEnMinuts;
        horaFinal = parseInt(sumaMinutos/60);
        minutosRestantes = sumaMinutos%60;
        if (horaFinal<=9){
            finReunion = ("0"+horaFinal+ ":" +minutosRestantes);
        }else  {
            finReunion = (horaFinal+ ":" +minutosRestantes);
        }

        if (finReunion > finalDeJornada){
            return false;
        }else {
            return true;
        }
        
    }
}
console.assert(agendarReunio("7:00",15)==false, 'Error comprovant agendarReunio("7:00",15)==false');
console.assert(agendarReunio("07:15",30)==false, 'Error comprovant agendarReunio("07:15",30)==false');
console.assert(agendarReunio("07:30",30)==true, 'Error comprovant agendarReunio("7:30",30)==true');
console.assert(agendarReunio("11:30",60)==true, 'Error comprovant agendarReunio("11:30",60)==true');
console.assert(agendarReunio("17:00",45)==true, 'Error comprovant agendarReunio("17:00",45)==true');
console.assert(agendarReunio("17:30",30)==false, 'Error comprovant agendarReunio("17:30",30)==false');
console.assert(agendarReunio("18:00",15)==false, 'Error comprovant agendarReunio("18:00",15)==false');
console.assert(agendarReunio("15:30",180)==false, 'Error comprovant agendarReunio("15:30",180)==false');
console.log("Test Done!");