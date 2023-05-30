const express = require('express');
const connectBD = require('./config/db');
const dotenv = require('dotenv').config();
const port = 5000;
// connect to database
connectBD() ;


const app = express();




//middleware  obligatoire pour POST request
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


app.use("/post", require("./routes/post.routes"));



app.listen(port,() => console.log('server demare au port' + port )
);
