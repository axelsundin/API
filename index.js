const express = require("express");
const fs = require("fs");
const server = express();
const port = 3000;

server.use(express.json());
server.use(express.static("public"));

server.get("/api", (req, res) => {
  let raw = fs.readFileSync("data.json");
  let data = JSON.parse(raw);
  res.json(data);
});

server.post("/api", (req, res) => {
  try {
    let raw = fs.readFileSync("data.json");
    let data = JSON.parse(raw);
    if (req.body.todo === "") {
      res.json("Please enter text");
      return;
    }
    data.push(req.body);
    fs.writeFileSync("data.json", JSON.stringify(data));
    res.json("Saved");
  } catch (err) {
    console.log(err);
  }
});

server.delete("/api", (req, res) => {
  try {
    let raw = fs.readFileSync("data.json");
    let data = JSON.parse(raw);
    if (req.body.action === "clear") {
      data = [];
      fs.writeFileSync("data.json", JSON.stringify(data));
      res.json("List cleared");
      return;
    }
    const newData = data.filter(function (object) {
      if (object.Title != req.body.Title) {
        return object;
      }
    });
    fs.writeFileSync("data.json", JSON.stringify(newData));
    res.json("Removed");
  } catch (err) {
    console.log(err);
  }
});

server.listen(port, () => console.log("Applikationen är igång. Välkommen!"));
