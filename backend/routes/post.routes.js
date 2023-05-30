const express = require('express');
const router = express.Router();

    //GET
router.get("/" , (req , res) => 
    res.json({hello: "salamt abou banat"}) 
)
     //POST
router.post("/" , (req , res) => {
            res.json({message : req.body})  
                               }
)
     //PUT
router.put("/:id" , (req , res) => {
            res.json({messageId  : req.params.id})
}
)
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

//zZfXP3uYIOLX4ACQ