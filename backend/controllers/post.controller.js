
const PostModel = require("../models/post.model")

// GET 
module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find()
    res.status(200).json(posts)
  }
// POST
module.exports.setPosts = async (req , res) => { 
      if (!req.body.message) {
        res.status(400).json({message : "please add msg" });
      } 
      const post = await PostModel.create({
              message : req.body.message,
              author : req.body.author
            } )
           res.status(200).json(post);
 };
 //  update 
 module.exports.editPosts = async  (req , res) => {
      const post = await PostModel.findById(req.params.id);
      if (!post) {
         res.status(400).json({message : "id not found" });
      }
      const updatPost = await PostModel.findByIdAndUpdate(
        post , 
        req.body ,
        {new : true}
      )
      res.status(200).json(updatPost);
     
 }
 // Delete 
 module.exports.deletePosts = async (req , res) => { 
   const post = await PostModel.findById(req.params.id);
   if (!post) { res.status(400).json({message : "id not found" })};
   await post.remove();
   res.status(200).json("post deleted : " + req.params.id);
 }
 // PATCH like
 module.exports.likePosts = async (req , res) => { 

     try {
            await PostModel.findByIdAndUpdate(
              req.params.id ,
              { $addToSet : { likers : req.body.userId } },
              { new : true}
              ).then ( (data) =>  res.status(200).send(data)); 

     } catch (err) {
        res.status(400).json(err);
     }
 };
   // path dislike 
   module.exports.dislikePosts = async (req , res) => { 

    try {
           await PostModel.findByIdAndUpdate(
             req.params.id ,
             { $pull : { likers : req.body.userId } },
             { new : true}
             ).then ( (data) =>  res.status(200).send(data)); 

    } catch (err) {
       res.status(400).json(err);
    }
};