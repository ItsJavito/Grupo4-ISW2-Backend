import { Router } from "express";
import{
    getAllUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
} from "../controllers/usuario.controllers.js";

const router= Router();
router.get("/usuarios", getAllUsuarios);
router.get("/usuarios/:id", getUsuario);
router.post("/usuarios", createUsuario);
router.put("/usuarios/:id", updateUsuario);
router.delete("/usuarios/:id", deleteUsuario);

export default router;
