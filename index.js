const express = require('express');
const faker = require('faker');

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

//GET - List with query params
app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 100;
  for (let index = 0; index < limit; index++) {
    products.push({
      id: index,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

// GET - Retrieve
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json([
    {
      id: id,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    },
  ]);
});

app.listen(port, () => {
  console.log('Servidor corriendo en puerto: ' + port);
});
