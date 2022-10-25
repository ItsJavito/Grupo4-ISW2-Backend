import initModels from "./init-models.js";
import {sequelize} from "../database/database.js";

const modelos =  initModels(sequelize);
export var EstadosUsuario              = modelos.ESTADOS_USUARIO
export var EventosUsuarios             = modelos.EVENTOS_USUARIOS;
export var Eventos                     = modelos.EVENTOS;
export var LinksEvento                 = modelos.LINKS_EVENTO;
export var UsuariosInvitadoEventos     = modelos.USUARIO_INVITADO_EVENTOS;       
export var UsuarioInvitado             = modelos.USUARIO_INVITADO;
export var Usuarios                    = modelos.USUARIOS;
