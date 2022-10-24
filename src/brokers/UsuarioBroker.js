import USUARIOS from "../models/USUARIOS";
import USUARIO_INVITADO from "../models/USUARIO_INVITADO";

/*
 TODO: UsuarioBroker, implementar el singletone y las funciones del broker. básicamente es lo mismo que el controlador. 
 */
export class UsuarioBroker{

    usuarios;
    usuario_invitado;
    
    constructor(usuarios, usuario_invitado){
        if(usuarios instanceof USUARIOS && usuario_invitado instanceof USUARIO_INVITADO){
            this.usuarios = usuarios;
            this.usuario_invitado = usuario_invitado;
        }else{
            throw console.error("No se puede crear el objeto");
        }
    }
    
}