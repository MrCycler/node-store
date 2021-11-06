const productRouter = require('../api/products/products.router');

const setRoutes = (app) => {
  app.use('/products', productRouter);
  app.get('/', (req, res) => {
    res.send('El servidor responde');
  });
};

module.exports = setRoutes;
