const fs = require("fs");

/**
 * Write the content in the file
 * @param {String} fileName Name of the file to write
 * @param {String} content Content to be written on the file
 */
function write(fileName, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile("./files/" + fileName, content, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/**
 * Read the file content
 * @param {String} fileName Name of the file to be read
 */
function read(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile("./files/" + fileName, "utf8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/**
 * Rename name of the file
 * @param {String} oldFileName Name of the file to be renamed
 * @param {String} newFileName New file name
 */
function rename(oldFileName, newFileName) {
  return new Promise(function (resolve, reject) {
    fs.rename("./files/" + oldFileName, "./files/" + newFileName, function (
      err,
      data
    ) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/**
 * Removes(deletes) file
 * @param {Strin} fileName Name of file to be removed
 */
function remove(fileName) {
  return new Promise(function (resolve, reject) {
    fs.unlink("./files/" + fileName, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = {
  write,
  read,
  rename,
  remove,
};
