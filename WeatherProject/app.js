const express = require("express"); //express make a local server allow browser to use data in our server
const https = require("https"); //allow to take external data
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var query = req.body.place;

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=6ae0a3c3a563505880f6bc480adaa3c0&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data); //take data and convert it to json
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p> in " + query + " " + description + "</p>");
      res.write("<h1>The temperature is " + temp + "</h1>");
      res.write("<img src = " + iconUrl + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
