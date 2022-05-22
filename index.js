const os = require('os');
const fs = require('fs');
const http = require('http');
const colors = require('colors');


// sistema operativo
console.log(os.platform());
console.log(os.release());
console.log('memoria libre: ', os.freemem() / 1073741824, ' Gigabytes');
console.log('memoria total: ', (os.totalmem() / 1073741824), ' Gigabytes');

console.log('');

// sistema de archivos
//crear archivo
fs.writeFile('./texto.txt', 'linea 1', function (err) {
    if (err){
        console.log(err.message);
    }
    console.log('Archivo Creado');
    console.log('');
})

//leer archivo
fs.readFile('./texto.txt', function(err, texto){
    if (err){
        console.log(err);
    }
    console.log(texto.toString());
    console.log('');
})

// http
// poner en marcha el server
/*
http.createServer(function (req, resp){
    resp.writeHead(200, {'Content-type': 'text/html'});
    resp.write('<h1>Hola Mundo desde NodeJS Servidor Dedicado</h1>');
    resp.end();
}).listen(3000);
*/
//reestructuracion de codigo para iniciar el server
//guardar la funcion en una constante
const respuesta = function (req, resp){
    resp.writeHead(200, {'Content-type': 'text/html'});
    resp.write('<h1>Hola Mundo desde NodeJS Servidor Dedicado</h1>');
    resp.end();
};
//guardar el inicio del server en otra constante
const server = http.createServer(respuesta);
//iniciar el server con una funcion 
//para mostrar en consola su funcionamiento
server.listen(3000, function(){
    console.log('Server On puerto 3000' .blue);
});
