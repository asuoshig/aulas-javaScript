const http = require('http');

const host = 'localhost';
const port = 3000;
const resposta = 'Minha pagina';

const requestListener = function(req, res){
    const {method,url} = req;
    console.log(`Chegou uma requisição no BackEnd no path ${url}`);
    res.writeHead(200,{'content-type':'text/html; charset=utf-8'});

const routes = function ( method, res){
    if(url === '/teste'){
        res.writeHead(200, {'content-Type': 'text/html; charset=utf-8'});
        res.end(routes );
    }
}
    
    // else if (url === '/professor'){
    //     res.end('Este é um professor');
    // }
    // else if (url === '/aluno'){
    //     res.end('Isto é um aluno')
    // }else{
    //     res.end(resposta)
    // }
}
// no lugar de res.end    const professorRoute = function(method, res)

const server = http.createServer();
server.on('request',requestListener);

server.listen(port,host,() =>{
     console.log(`Servidor rodando em http://${host}:${port}/`)
});