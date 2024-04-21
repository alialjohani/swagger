const fs = require('fs');
async function writeJson(json, fileName) {

    const r = await fs.promises.writeFile(fileName, json, 'utf8')
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.log("err:", err);
            return false;
        });
    console.log(`writeJson ${fileName} result status:`, r);
}


async function copyFile(src, dest, mode) {

    const r = await fs.promises.copyFile(src, dest)
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.log("err:", err);
            return false;
        });
    console.log(`copyFile ${src} result status:`, r);
}

function readFile(filePath) {
    try {
      const data = fs.readFileSync(filePath);
      return data.toString();
    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
    }
  }

exports.writeJson = writeJson;
exports.copyFile = copyFile;
exports.readFile = readFile;