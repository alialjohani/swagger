## Overview
This is a Nodejs script that converts Postman collection to swagger.json file to be published as swagger page.
Postman collection is a set of endpoints tests that have been completed in the collection.
This script would fetch these endpoints by using Postman Rest api and secrete key.

## To run:
- Install all required node modules by running `npm insall` commands
-  You need to have "POSTMAN COLLECTION ID" inside a text file called `POSTMAN_COLLECTION_ID.txt` as well as a the key value inside a text file called `KEY.txt`.
  - With Postman, beside the collection, click on the 3-dots, selct share, and click on "Via API" tab to get the collection ID and key value.
- Then, run node index.js and with your browser visit: `localhost:88/api/v2/swagger`.  
