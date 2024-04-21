
async function getData(url) {
    try {
        const response = await fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.log("getData: ", error);
        return { message: error };
    }


};


// Example POST method implementation:
async function postData(url = "", data = {}) {
    try {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${GPT_API_KEY}`
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        console.log(response); // >> TEST ONLY
        if ((!('status' in response)) || (response.status != 200 && response.status != 201)) {
            throw new HttpError("postData", response.statusText, response.status);
        }
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
        return error;
    }
}


exports.getData = getData;
exports.postData = postData;