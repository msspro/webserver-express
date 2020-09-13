const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'content-Type': 'application/json' });
        let salida = {
            nombre: 'Pedro',
            edad: '24',
            url: req.url
        };
        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end();
    })
    .listen(8080);

console.log('Escunado el puerto 8080');