const express = require('express');
const { setPosts, getPosts, editPosts } = require('../controllers/post.controller');
const router = express.Router();

    //GET
router.get("/" , getPosts)
     //POST
router.post("/" , setPosts)
     //PUT
router.put("/:id" , editPosts)
     //DELETE
router.delete("/:id" , (req , res) => {
      res.json({messageId  : 'post deleted id = ' + req.params.id})
}
)
    //patch
router.patch("/like-post/:id" , (req , res) =>{
    res.json({message : '  post like  id = ' + req.params.id  })       
}
)
     //patch 
     router.patch("/dislike-post/:id" , (req , res) =>{
      res.json({message : '  post dislike like  id = ' + req.params.id  })       
  }
  )    



module.exports = router;

