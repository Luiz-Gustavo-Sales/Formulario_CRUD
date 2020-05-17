const Post = require("../banco/Post");

const login_ = (req, res) => {
  res.render("login");
};
const loginUser = async (req, res) => {
  try {
    const user = await Post.find({});
    const senhaUser = req.body.senha;
    const loginUser = req.body.login;

    user.map((user) => {
      if (loginUser == user.login && senhaUser == user.senha) {
        res.redirect("/cadastrados");
      }
    });
  } catch (erro) {

  console.log("ERRO NO LOGIN")
  }
};
module.exports = {
  login_,
  loginUser,
};
