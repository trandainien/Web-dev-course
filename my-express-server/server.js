const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.get("/Contact", function (req, res) {
  res.send("<h1>you can contact me via tdnien21@clc.fitus.edu.vn</h1>");
});

app.get("/About", function (req, res) {
  res.send("<h1>My name is Tran Dai Nien. Nice to meet you</h1>");
});

app.get("/Hobbies", function (req, res) {
  res.send("<h1>Badminton, Soccer</h1>");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
