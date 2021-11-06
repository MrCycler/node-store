const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('El servidor responde');
});

app.get('/mensaje', (req, res) => {
  res.send('Este te envia un mensaje');
});

app.get('/json', (req, res) => {
  res.json({
    mensaje: 'Un mensaje',
    numero: 1,
  });
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 10,
    },
    {
      name: 'Product 2',
      price: 2,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json([
    {
      name: 'Product 1',
      price: 10,
      id: id,
    },
  ]);
});

app.listen(port, () => {
  console.log('Servidor corriendo en puerto: ' + port);
});
