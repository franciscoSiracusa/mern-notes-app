const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares

//Global

//Routes

//Static Files

//Initialize Server
app.listen(app.get('port'), () =>{
    console.log("Server on port", app.get('port'));
})