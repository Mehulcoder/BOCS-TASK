var express = require('express');
var path = require('path');
var request = require('request');
var bodyParser = require("body-parser");

var app = express();
var port = 3000 || process.env.PORT;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var apikey =  '';


// getweather(`https://api.openweathermap.org/data/2.5/weather?lat=22&lon=22&appid=${apikey}`)

app.post('/', (req, res) => {
  //Getting Coordinates
  var lat = req.body.lat;
  var lon = req.body.lon;

  //URL generation
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

  //Sending request and getting data
  request({url, json:true}, function (err, response, body) {
    
    if(err){
      console.log('error:', err);
    } else {
      var main = body.main;
      var temp = main.temp;
      var pressure = main.pressure;
      var humidity = main.humidity;
      
      var message = `The temprature is ${temp} degree Celcius, pressure is ${pressure} Pa, and humidity is ${humidity} g/cc. \nWeather:${body.weather[0].description}`

      console.log(message);
      res.send(message)
    }
  });


});


app.listen(port, () => {
  console.log("Server is on port " + port);
});
