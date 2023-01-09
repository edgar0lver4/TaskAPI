const express = require('express');
const bodyParse = require('body-parser')
const app = express()
const api = require('./routes/routes');
const port = process.env.PORT || 3001;

//Servir contenido estatico

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json())
app.use('/api', api)

app.get('/', (req, res)=>{
    res.statusCode = 200;
    res.json({ success:true, data:"Endpoint vivo" });
})

app.get('*',(req, res)=>{
    res.send('404 | Page not found');
    res.statusCode = 404;
    res.status(404);
})

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
})