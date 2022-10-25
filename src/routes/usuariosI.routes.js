import { Router } from "express";
import { UsuarioBroker } from "../brokers/UsuarioBroker.js";
import { UsuarioInvitado, Usuarios } from "../models/modelos.js";

const usuarioBroker = await UsuarioBroker.getInstance(Usuarios , UsuarioInvitado);
const router= Router();
const route = "/usuarioI"

router.get(route, usuarioBroker.getAllUsuarioI);
router.get(`${route}:id`, usuarioBroker.getUsuarioI);
router.post(route, usuarioBroker.createUsuariosI);
router.put(`${route}:id`, usuarioBroker.updateUsuarioI);
router.delete(`${route}/:id`, usuarioBroker.deleteUsuarioI);

export default router;