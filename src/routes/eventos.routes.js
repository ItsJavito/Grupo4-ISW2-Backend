import { Router } from "express";
import { EventoBroker } from "../brokers/EventoBroker.js";
import { ParticipanteEventoBroker } from "../brokers/ParticipanteEventoBroker.js";
import { EstadosUsuario, Eventos , EventosUsuarios , UsuarioInvitado, Usuarios, UsuariosInvitadoEventos } from "../models/modelos.js";

const router = Router();
const eventoBroker = await EventoBroker.getInstance(Eventos , EventosUsuarios , UsuariosInvitadoEventos);
const participanteBroker = await ParticipanteEventoBroker.getInstance(EventosUsuarios, UsuariosInvitadoEventos, Usuarios , UsuarioInvitado, EstadosUsuario)
const route = "/eventos"

router.get( route, eventoBroker.getAllEventos);
router.get(`${route}/:id` , eventoBroker.getEvento);
router.post(route, eventoBroker.createEvento);
router.put(`${route}/:id`, eventoBroker.updateEvento);
router.delete(`${route}/:id`, eventoBroker.deleteEvento);

router.get(`${route}/usuarios/:id`, eventoBroker.getEventosUsuario)     //busca por co_usr
router.get(`${route}/usuariosI/:id`, eventoBroker.getEventosUsuarioI)   //busca por co_usr

router.get("/participantes", participanteBroker.getAllEventosParticipantes);
router.get(`/participantes/:id`, participanteBroker.getEventosParticipantes) // co_evnt 
router.post("/participantes" , participanteBroker.createEventosParticipantes)

router.post("/estados" , participanteBroker.createEstadosUsuarios)
router.get("/estados" , participanteBroker.getEstadosUsuarios)
router.delete("/estados/:id" , participanteBroker.deleteEstadosUsuarios)

router.post("/eventosUsuarios", eventoBroker.createEventoUsuario);

export default router; 