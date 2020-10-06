const express = require('express');
const app = express(); // app nos sirve para crear el servidor, en nuestro caso es nuestro servidor
const path = require('path');

//Setting
app.set('Port', 8080);
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);


//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));

//Listening the server
app.listen(app.get('Port'),() => {
    console.log('Server on Port',app.get('Port'));
});