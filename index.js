const POSTMAN_COLLECTION_FILENAME = "collection.json"; // Postman File
const SWAGGER_FILENAME = "swagger.json"; // Swagger File
const swaggerUi = require('swagger-ui-express'); // Swagger Setup
const express = require("express");
const app = express();
const PORT = 88;
const fileMangement = require('./fileMangement');
const getPostmanCollection = require('./getPostmanCollection');
const postmanToSwagger = require('./postmanToSwagger');
const src = `./${SWAGGER_FILENAME}`
const dest = `./output/${SWAGGER_FILENAME}`;

async function run() {
    await getPostmanCollection(POSTMAN_COLLECTION_FILENAME);
    await postmanToSwagger(POSTMAN_COLLECTION_FILENAME, SWAGGER_FILENAME);
    await fileMangement.copyFile(src, dest)
    console.log("run, completed!.");
    const swaggerDocument = require('./swagger.json'); // Swagger Setup - require file json openapi
    app.use('/api/v2/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.listen(PORT);
}

run();
