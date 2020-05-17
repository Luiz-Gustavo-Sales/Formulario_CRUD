const Post = require("../banco/Post");


const deletetar =  async (req,res) =>{
const id= req.params.id;

await Post.deleteOne({_id:id},function(erro,result){
    if (erro) return res.send(500,erro);
})

}

module.exports={
    deletetar
}