import { Router } from "express";
import { EventoBroker } from "../brokers/eventoBroker.js";
import { Eventos } from "../models/modelos.js";

const router = Router();
const eventoBroker = EventoBroker.getInstance(Eventos);

if(eventoBroker instanceof EventoBroker){
    router.get("/eventos" , eventoBroker.getAllEventos);
    router.get("/eventos/:id" , eventoBroker.getEvento);
    router.post("/eventos", eventoBroker.createEvento);
    router.put("/eventos/:id", eventoBroker.updateEvento);
    router.delete("/eventos/:id", eventoBroker.deleteEvento);
}

export default router; 