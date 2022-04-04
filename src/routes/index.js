import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js"

const routes = (app) => {
    app.route('/').get((res,req) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;