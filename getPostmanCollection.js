const fileMangement = require('./fileMangement');
const restMethod = require("./restMethods");



async function getPostmanCollection(POSTMAN_COLLECTION_FILENAME) {
    try {
        // Get collection from Postman APIs, and write it in JSON file format
        const POSTMAN_COLLECTION_ID = await fileMangement.readFile('./POSTMAN_COLLECTION_ID.txt');
        const KEY = await fileMangement.readFile('./KEY.txt');
        const POSTMAN_COLLECTION_API = POSTMAN_COLLECTION_ID + KEY;

        const result = await restMethod.getData(POSTMAN_COLLECTION_API);
        const json = result.collection;
        console.log("generateCollection: ", json);
        await fileMangement.writeJson(JSON.stringify(json), POSTMAN_COLLECTION_FILENAME);
    } catch (error) {
        console.log("generateCollection catch error: ", error);
    }

}

module.exports = getPostmanCollection;