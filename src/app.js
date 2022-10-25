import express from "express";
import cors from "cors";
import eventosRoutes from "./routes/eventos.routes.js"
import usuariosRoutes from "./routes/usuarios.routes.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(eventosRoutes)
// app.use(usuariosIRoutes)
app.use(usuariosRoutes)

export default app;