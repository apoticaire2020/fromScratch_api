const express = require('express');
const { setPosts, getPosts, editPosts, deletePosts , likePosts , dislikePosts} = require('../controllers/post.controller');
const router = express.Router();

    //GET
router.get("/" , getPosts)
     //POST
router.post("/" , setPosts)
     //PUT
router.put("/:id" , editPosts)
     //DELETE
router.delete("/:id" , deletePosts)
    //patch like
router.patch("/like-post/:id" , likePosts)
     //patch dislike
     router.patch("/dislike-post/:id" , dislikePosts)    



module.exports = router;

