const express = require('express');
const setRoutes = require('./startup/setRoutes');

const app = express();
const port = 3000;
setRoutes(app);
app.listen(port, () => {
  console.log('Servidor corriendo en puerto: ' + port);
});
