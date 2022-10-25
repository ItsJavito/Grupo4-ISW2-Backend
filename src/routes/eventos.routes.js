import { Router } from "express";
import { EventoBroker } from "../brokers/eventoBroker.js";
import { Eventos } from "../models/modelos.js";

const router = Router();
const eventoBroker = await EventoBroker.getInstance(Eventos);
const route = "/eventos"

router.get( route, eventoBroker.getAllEventos);
router.get(`${route}/:id` , eventoBroker.getEvento);
router.post(route, eventoBroker.createEvento);
router.put(`${route}/:id`, eventoBroker.updateEvento);
router.delete(`${route}/:id`, eventoBroker.deleteEvento);


export default router; 