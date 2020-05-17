// IMPORTANDO EXPRESS
const express = require("express");
const port= process.env.PORT || 3000
// IMPORTANDO ROUTES (rotas  da aplicação)
const routes = require("./routes");

// CRIANDO UMA APLICAÇÃO EXPRESS
const app = express();

// SETANDO A VARIAVEL 'view engine' PARA 'EJS' PARA TODA A APLICAÇÃO (app)
app.set("view engine", "ejs");
// SETANDO UMA VARIAVEL 'port' PARA TODA A APPLICAÇÃO (app)
//app.set("port", "8080");

// USANDO A FUNÇÃO MIDDLEWARE (urlenconded) PARA DECODIFICAR O BODY VINDO PELA URL DA REQUISIÇÃO
app.use(express.urlencoded({ extended: true }));

// USANDO EM FORMA DE FUNÇÃO MIDDLWARE AS ROTAS IMPORTADAS
app.use(routes);

//INICIANDO O SERVIDOR NA PORTA SETADA EM app.set('port', '8080')
//app.set('port', '8080')
app.listen(port,function(){
    console.log(`APP RODANDO NA PORTA ${port}`)
});