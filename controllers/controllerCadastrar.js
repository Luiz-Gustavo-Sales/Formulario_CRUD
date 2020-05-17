const Post = require("../banco/Post");

const formulario = (req, res) => {
  res.render("formulario");
};

const cadastrar = (req, res) => {
  Post.create({
    login:req.body.login,
    email: req.body.email,
    senha: req.body.senha,
    endereco: req.body.endereco,
    cidade: req.body.cidade,
    estado: req.body.estado,
    cep: req.body.cep,
  })
    .then(() => {
      res.redirect("/login");
  
    })
    .catch((erro) => {
      res.send("ERRO", erro);
    });
};

module.exports = {
  cadastrar,
  formulario,
};
