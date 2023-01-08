const express = require('express')
const app = express()
const api = require('./routes/routes');

//Servir contenido estatico

app.use( express.json() )
app.use('/api', api)

app.get('/hola-mundo', (req, res)=>{
    res.send('Hola mundo');
})

app.get('*',(req, res)=>{
    res.send('404 | Page not found');
    res.statusCode = 404;
    res.status(404);
})

app.listen(3001)