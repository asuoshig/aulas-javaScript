// const http = require('http');

// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-Type': 'text/plain'});
//     res.end('olá Mundo! \n');
// });

// server.listen(port, () => {
//     console.log(`servidor rodando em http://localhost:${port}/`);
// })

const http = require('http');

const host = 'localhost'
const port = 3000;
const botao = 'console.log("to no front")'
const resposta = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo cliente-side</title>
</head>
<body>
    <button id="meuBotao">Clique aqui</button>
    <script>${botao}</script>
    
</body>
</html>`

const requestListener = function(req, res){
    const {method, url} = req; // tirar uma requisiçao
    console.log(url)
    console.log("chegou uma requisiçao no backend")
    console.log("chegou uma requisição")

    if (barrateste == url){
        console.log("você é uma url")
    }

    
    
    res.writeHead(200, {'content-Type': 'text/html; charset=utf-8'});
    res.end(resposta );
}

const server = http.createServer();
server.on('request', requestListener) // uplicando, o dodigo quebra.

server.listen(port, host, () => {
    console.log(`servidor rodando em http://${host}:${port}/`)
})
