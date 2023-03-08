const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerOptions = {
    explorer: true,
};


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions));

const port = process.env.PORT || 3000;

const start = async () => {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
};

start();

module.exports = app;