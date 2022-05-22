const express = require('express');
const colors = require('colors');

//usando express para crear e iniciar el server
const server = express();
server.get('/', (rep, res) =>{
    res.send('<h1>Hola mundo de server dedicado con express y node</>');
    res.end();
});

server.listen(3000, () => {
    console.log('server On puerto 3000' .yellow);
})