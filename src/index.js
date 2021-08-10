const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(express.urlencoded({extended:false})); // is a method in express to recognize the incoming Request Object as strings or arrays
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//Global

//Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/notes.js'));
app.use(require('./routes/users.js'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Initialize Server
app.listen(app.get('port'), () =>{
    console.log("Server on port", app.get('port'));
})