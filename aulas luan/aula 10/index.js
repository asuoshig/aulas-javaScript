const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'minha-chave-secreta';

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  if (usuario === 'usuario' && senha === 'senha') {
    const token = jwt.sign({ usuario }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Usuario ou senha invalido' });
  }
});

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    console.log('Não tem token')
    return res.sendStatus(403)
  };

  jwt.verify(token, SECRET_KEY, (err, usuario) => {
    if (err) {
      console.log(err)
      return res.sendStatus(403)
    };
    req.usuario = usuario;
    next();
  });
};

app.get('/protegido', authenticateToken, (req, res) => {
  res.json({ message: 'Esta rota está protegida!', user: req.user });
});

app.listen(PORT,  () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
