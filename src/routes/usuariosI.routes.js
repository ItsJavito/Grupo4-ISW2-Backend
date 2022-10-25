import { Router } from "express";
import { UsuarioBroker } from "../brokers/UsuarioBroker.js";
import { UsuarioInvitado, Usuarios } from "../models/modelos.js";


const usuarioBroker = await UsuarioBroker.getInstance(Usuarios , UsuarioInvitado);
const router= Router();

router.get("/usuariosI", usuarioBroker.getAllUsuarioInvitado);
router.get("/usuariosI/:id", usuarioBroker.getUsuarioI);
router.post("/usuariosI", usuarioBroker.createUsuariosI);
router.put("/usuariosI/:id", usuarioBroker.updateUsuarioI);
router.delete("/usuariosI/:id", usuarioBroker.deleteUsuarioI);

export default router;