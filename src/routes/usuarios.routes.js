import { Router } from "express";
import { UsuarioBroker } from "../brokers/UsuarioBroker.js";
import { Usuarios , UsuarioInvitado} from "../models/modelos.js";

const usuarioBroker = await UsuarioBroker.getInstance(Usuarios , UsuarioInvitado);
const router = Router();
const route = "/usuario";

router.get( route, usuarioBroker.getAllUsuarios);
router.get(`${route}/:id` , usuarioBroker.getUsuario);
router.post(route, usuarioBroker.createUsuario);
router.put(`${route}/:id`, usuarioBroker.updateUsuario);
router.delete(`${route}/:id`, usuarioBroker.deleteUsuario);

router.get('/login' , usuarioBroker.loginUsuario)

export default router; 