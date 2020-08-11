const fs = require("fs");

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
