import { Router } from "express";
import { UsuarioBroker } from "../brokers/UsuarioBroker.js";
import { Usuarios , UsuarioInvitado } from "../models/modelos.js";

//instancia de usuario Broker
const usuarioBroker = await UsuarioBroker.getInstance(Usuarios , UsuarioInvitado);
const router = Router();


router.get("/usuarios" , usuarioBroker.getAllUsuarios);
router.get("/usuarios/:id" , usuarioBroker.getUsuario);
router.post("/eventos", usuarioBroker.createUsuario);
router.put("/eventos/:id", usuarioBroker.updateUsuario);
router.delete("/eventos/:id", usuarioBroker.deleteUsuario);

export default router; 