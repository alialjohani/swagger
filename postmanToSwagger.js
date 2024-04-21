// https://joolfe.github.io/postman-to-openapi/#outputformat-string
// Postman collection json file to swagger json file (openapi)
const postmanToOpenApi = require('postman-to-openapi')
async function postmanToSwagger(postmanCollectionFileName, swaggerFileName) {
    try {
        const result = await postmanToOpenApi(postmanCollectionFileName, swaggerFileName, { defaultTag: 'General', outputFormat: 'json' })
        console.log("Postman_to_Swagger completed!.")
    } catch (err) {
        console.log(err)
    }
}
module.exports = postmanToSwagger;
