const { response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

/***
 * GET - Buscar uma informação dentro do servidor.
 * POST - Inserir uma informação dentro do servicor
 * PUT - Alterar uma informação
 * PATCH - Alterar uma informação 
 * DELETE - Deleta uma informação
 */


/***
 * Tipos de parâmetros
 * 
 * Routes Params => Identificar um recurso para poder editar/deletar/buscar o recurso
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos para a inserção/alteração de algum recurso
 */

app.get("/courses", (request, response) => {
    const teste = request.query;
    console.log(teste);

    return response.json(["Curso 1","Curso 2","Curso 3"]);
});

app.post("/courses", (request, response) => {
    const body = request.body;

    console.log(body);
    return response.json(["Curso 1","Curso 2","Curso 3", "Curso 4"]);
});

app.put("/courses/:id", ( request, response ) => {
    const { id } = request.params;
    console.log(id);
    return response.json(["Curso 6","Curso 2","Curso 3", "Curso 4"]);
} )

app.patch( "/courses/:id", (request, response) => {
    return response.json(["Curso 6","Curso 7","Curso 3", "Curso 4"]);
});

app.delete("/courses/:id" , ( request, response) => {
    return response.json(["Curso 3"]);
});


//localhost:3333
app.listen(3333);



