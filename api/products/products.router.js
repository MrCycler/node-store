const express = require('express');
const faker = require('faker');

const router = express.Router();

//GET - List with query params
router.get('/', (req, res) => {
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
router.get('/:id', (req, res) => {
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

module.exports = router
