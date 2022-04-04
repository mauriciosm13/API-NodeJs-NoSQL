import express from "express";
import AutoresController from "../controllers/AutoresController.js";

const router = express.Router();

router
.get("/Autores", AutoresController.listarAutores)
.get("/Autores/:id",AutoresController.listarAutoresPorId)
.post("/autores",AutoresController.cadastrarAutores)
.put("/autores/:id", AutoresController.atualizarAutores)
.delete("/autores/:id", AutoresController.excluirAutores);

export default router;