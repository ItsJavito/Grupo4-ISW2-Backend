import { Router } from "express";
import { EventoBroker } from "../brokers/EventoBroker.js";
import { Eventos , EventosUsuarios , UsuariosInvitadoEventos } from "../models/modelos.js";

const router = Router();
const eventoBroker = await EventoBroker.getInstance(Eventos , EventosUsuarios , UsuariosInvitadoEventos);
const route = "/eventos"

router.get( route, eventoBroker.getAllEventos);
router.get(`${route}/:id` , eventoBroker.getEvento);
router.post(route, eventoBroker.createEvento);
router.put(`${route}/:id`, eventoBroker.updateEvento);
router.delete(`${route}/:id`, eventoBroker.deleteEvento);

router.get(`${route}/Usuarios/:id`, eventoBroker.getEventosUsuario)
router.get(`${route}/UsuariosI/:id`, eventoBroker.getEventosUsuarioI)

export default router; 