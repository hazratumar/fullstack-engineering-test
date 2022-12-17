//import express module
const express = require('express');
//import routes file
const routes = require('./routes/Routes')
//import .env file
require("dotenv").config();
// make express object
const app = express();
//routes calling 
app.use("/", routes);

// create server
const Port = process.env.PORT;
app.listen(Port, () => {
    console.log("Server is running on http://localhost:" + Port);
});