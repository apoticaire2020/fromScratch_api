const express = require('express');
const router = express.Router();


app.get("/hello" , (req , res) => 
  //  res.send("<h1>SALAMAT </h1>")  // HTML 
   res.json({hello: "salamt abou banat"}) // JSON 
)


module.exports = router;