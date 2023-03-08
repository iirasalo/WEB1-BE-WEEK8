var swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
var outputFile = "./swagger.json";
var endpointsFiles = ["./app.js"];
var config = {
    securityDefinitions: {
        bearer: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    }
};

swaggerAutogen(outputFile, endpointsFiles, config);