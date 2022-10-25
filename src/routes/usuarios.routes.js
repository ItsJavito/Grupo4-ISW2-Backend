import { Router } from "express";
import { UsuarioBroker } from "../brokers/UsuarioBroker.js";
import { Usuarios , UsuarioInvitado} from "../models/modelos.js";

//instancia de usuario Broker
const usuarioBroker = await UsuarioBroker.getInstance(Usuarios , UsuarioInvitado);
const router = Router();


router.get("/usuario" , usuarioBroker.getAllUsuarios);
router.get("/usuario/:id" , usuarioBroker.getUsuario);
router.post("/usuario", usuarioBroker.createUsuario);
router.put("/usuario/:id", usuarioBroker.updateUsuario);
router.delete("/usuario/:id", usuarioBroker.deleteUsuario);

router.get("/usuariosI", usuarioBroker.getAllUsuarioI);
router.get("/usuariosI/:id", usuarioBroker.getUsuarioI);
router.post("/usuariosI", usuarioBroker.createUsuariosI);
router.put("/usuariosI/:id", usuarioBroker.updateUsuarioI);
router.delete("/usuariosI/:id", usuarioBroker.deleteUsuarioI);


export default router; 