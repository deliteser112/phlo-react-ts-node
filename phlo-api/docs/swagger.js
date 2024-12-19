const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDef = require("./swaggerDef");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Funding Opportunities API",
      description: "API Documentation for Funding Opportunities",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development Server",
      },
    ],
    paths: swaggerDef.paths,
  },
  apis: [], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
