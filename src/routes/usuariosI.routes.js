import { Router } from "express";
import{
    getAllUsuarioInvitado,
    createUsuariosI,
    getUsuarioI,
    updateUsuarioI,
    deleteUsuarioI
} from "../controllers/usuarioInvitado.controllers.js";

const router= Router();
router.get("/usuariosI", getAllUsuarioInvitado);
router.get("/usuariosI/:id", getUsuarioI);
router.post("/usuariosI", createUsuariosI);
router.put("/usuariosI/:id", updateUsuarioI);
router.delete("/usuariosI/:id", deleteUsuarioI);

export default router;