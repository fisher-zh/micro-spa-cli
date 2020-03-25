const fs = require('fs');

const createFolder = (foldername) => {
    const filePath = `${process.cwd()}/${foldername}`
    fs.mkdirSync(filePath);
    return filePath;
};

module.exports = createFolder;
