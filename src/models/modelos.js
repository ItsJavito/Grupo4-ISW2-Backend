import initModels from "./init-models.js";
import {sequelize} from "../database/database.js";

export var EstadosUsuario;
export var EventosUsuarios;
export var Eventos;
export var LinksEvento;
export var UsuariosInvitadoEventos;
export var UsuarioInvitado;
export var Usuarios;


export const InicializarModelos = async  _ =>{
    const modelos = await initModels(sequelize);
    EstadosUsuario              = modelos.ESTADOS_USUARIO
    EventosUsuarios             = modelos.EVENTOS_USUARIOS;
    Eventos                     = modelos.EVENTOS;
    LinksEvento                 = modelos.LINKS_EVENTO;
    UsuariosInvitadoEventos     = modelos.USUARIO_INVITADO_EVENTOS;       
    UsuarioInvitado             = modelos.USUARIO_INVITADO;
    Usuarios                    = modelos.USUARIOS;
}