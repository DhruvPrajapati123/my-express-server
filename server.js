const express = require("express");
const app = express();

app.get("/", function (req, res) {
  // console.log(request)
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>This is a contact page</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1>This is a about page</h1>");
});

app.get("/hobbies", function (req, res) {
  res.send(
    "<h1>Hobbies</h1><ul><li>Hobbie1</li><li>Hobbie2</li><li>Hobbie3</li></ul>"
  );
});

app.listen(3000, function () {
  console.log("Your server is started on port 3000");
});
