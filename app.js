var UI = require('ui');
var ajax = require('ajax');

var card = new UI.Card({
  title: "Weather",
  subtitle: "Fetching"
});

card.show();

var cityName = 'Seattle';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;

ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data){
    console.log('Fetched!');
    card.body(JSON.stringify(data.weather));
    
    var location = data.name;
    var temperature = Math.round(data.main.temp - 273.15)  + 'C';
    var description = data.weather[0].description;
    card.subtitle(location + ', ' + temperature);
    card.body(description);
  },
  function(error){
    console.log('Failed...');
    
  }
);
