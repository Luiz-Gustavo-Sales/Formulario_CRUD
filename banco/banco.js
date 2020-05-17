const mongoose = require("mongoose");

const banco_ = mongoose.connect(
  "mongodb+srv://formulario:flamengo15@cluster0-xsmns.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//exportando a conexão do banco de dados
module.exports = banco_;