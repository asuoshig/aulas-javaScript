const express = require('express')//trabalhar importaçao
const boryParser = require ('body-parser');

const PORTA = 3000
const app = express()
app.use(boryParser.json());

app.listen(3000, () => {
    console.log(`servidor rodando na porta http://localhost:3000`)
})

app.get('/', (req, res) => {
   const mensagem = {
    message: 'ola mundo',
    to: 'aqui'
   } //todas requisiçao tem uma resposta
})

app.post('/login', (req, res) => {
    const{usuario, senha} = req.body
    console.log(usuario)
    console.log(senha)


    if(usuario === 'usuario' & senha === 'senha'){
        res.json({token: 'token'}) // token é fixa de credencial
        // console.log('ok')
    }else{
        res.status(401).json({message: 'login invalido'})
    }
    
})
