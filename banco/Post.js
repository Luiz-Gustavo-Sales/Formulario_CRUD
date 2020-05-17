//IMPORTANDO  conexão do banco
const banco = require("./banco");
const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },

  senha: {
    type: String,
    require: true,
  },
  login: {
    type: String,
    require: true,
  },
  endereco: { type: String },

  cidade: { type: String },

  estado: { type: String },

  cep: { type: String },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
