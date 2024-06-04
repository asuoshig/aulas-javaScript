const http = require('http');

const host = 'localhost';
const port = 3000;
const resposta = 'Minha pagina';

const requestListener = function(req, res){
    const {method,url} = req;
    console.log(`Chegou uma requisição no BackEnd no path ${url}`);
    res.writeHead(200,{'content-type':'text/html; charset=utf-8'});

    if(url === '/teste'){
        res.end('E um Teste');
    }
    else if (url === '/professor'){
        res.end('Este é um professor');
    }
    else if (url === '/aluno'){
        res.end('Isto é um aluno')
    }else{
        res.end(resposta)
    }
}

const server = http.createServer();
server.on('request',requestListener);

server.listen(port,host,() =>{
     console.log(`Servidor rodando em http://${host}:${port}/`)
});