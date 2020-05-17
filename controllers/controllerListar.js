const Post = require("../banco/Post");

const listar = async (req, res) => {
  const posts = await Post.find({});
  res.render("cadastrados", { posts });
};

module.exports = {
  listar,
};
