import { Asistente } from "./Asistente";
import { Interesado } from "./Interesado";
import { Participante } from "./Participante";

export class PartipanteEvento{
    constructor(usuarioI , evento , fh_inscr , co_estd){
        this.usuarioI = usuarioI
        this.evento = evento 
        this.fh_inscr = fh_inscr
        if(co_estd === 1){
            this.estado = new Interesado();
        }
        else if(co_estd === 2){
            this.estado = new Participante();
        }
        else if(co_estd === 3){
            this.estado = new Asistente();
        }
    }

    nextState(){
        if(this.state instanceof Interesado){
            this.state = new Participante();
        }
        else if(this.state instanceof Participante){
            this.state = new Asistente();
        }
    }
}