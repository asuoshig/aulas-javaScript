const express = require('express')//trabalhar importaçao

const app = express()

app.listen(3000, 'localhost', () => {
    console.log(`servidor rodando na porta http://localhost:3000`)
})

app.get('/', (req, res) => {
    res.send('ola  mundo')
})