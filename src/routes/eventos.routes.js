import { Router } from "express";
import { 
    getAllEventos, 
    createEvento, 
    getEvento, 
    updateEvento, 
    deleteEvento} 
from "../controllers/eventos.controllers.js";

const router = Router();

router.get("/eventos" , getAllEventos);
router.get("/eventos/:id" , getEvento);
router.post("/eventos", createEvento);
router.put("/eventos/:id", updateEvento);
router.delete("/eventos/:id", deleteEvento);

export default router; 