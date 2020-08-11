const http = require("http");
const fs = require("fs");

const fileOps = require("./fileOps");

// Create http server
const server = http.createServer(function (req, res) {
  let separatedInput = req.url.split("/");

  // Write the file specified with content given
  if (separatedInput[1] === "write") {
    let content = decodeURI(separatedInput[3]);
    fileOps
      .write(separatedInput[2], content)
      .then(function () {
        res.end("File written with '" + content + "'");
      })
      .catch(function (err) {
        res.end("Failed");
      });
  }

  // Read specified file
  else if (separatedInput[1] === "read") {
    fileOps
      .read(separatedInput[2])
      .then(function (data) {
        res.end(data);
      })
      .catch(function (err) {
        res.end("Failed");
      });
  }

  // Delete the file specified
  else if (separatedInput[1] === "remove") {
    fileOps
      .remove(separatedInput[2])
      .then(function () {
        res.end(separatedInput[2] + " deleted");
      })
      .catch(function (err) {
        res.end("Failed");
      });
  }

  //Rename specified file
  else if (separatedInput[1] === "rename") {
    fileOps
      .rename(separatedInput[2], separatedInput[3])
      .then(function () {
        res.end(
          "File " + separatedInput[2] + " renamed to " + separatedInput[3]
        );
      })
      .catch(function (err) {
        res.end("Failed");
      });
  } else {
    // Default response
    fs.readFile("./index.html", null, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.write("File not found");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  }
});

// Listen on the port 'process.env.PORT' for deployment to heroku
server.listen(process.env.PORT, function () {
  console.log("server running");
});
