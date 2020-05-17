// IMPORTANDO EXPRESS
const express = require("express");

// IMPORTANDO O CONTROLLER 'cadastrar'
const cadastrar = require("../controllers/controllerCadastrar");
const listar = require("../controllers/controllerListar");
const deletar = require("../controllers/controllerDelet");
const login = require("../controllers/controllerLogin");
// CRIANDO UM 'Router()' chamado 'routes' PARA LIDAR COM AS ROTAS
const routes = express.Router();

//=================== CRIANDO AS ROTAS DA APLICAÇÃO========================
routes.get("/formulario", cadastrar.formulario);
//ROTA PAGA PEGAR OS DADOS
routes.post("/cadastrar", cadastrar.cadastrar);
//===================FIM- CRIANDO AS ROTAS DA APLICAÇÃO========================

//=================== LISTANDO DADOS========================
routes.get("/cadastrados", listar.listar);
//===================FIM-LISTANDO DADOS=====================

routes.get("/login",login.login_);

//fazer login
routes.post("/loginUser", login.loginUser);

routes.get("/apagar/:id", deletar.deletetar);

// EXPORTANDO A variavel routes (QUE É UM Router()) PARA SER USADO NO SERVIDOR.JS
module.exports = routes;
