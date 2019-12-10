const KELVIN = 273;

class WeatherGetter {
  constructor(lat, long) {
    this.lat = lat;
    this.long = long;
    this.temperature = 0;
    this.description = "";
    this.iconId = "";

    this.weatherApi =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      this.lat.toString() +
      "&lon=" +
      this.long.toString() +
      '&units=metric&appid=4a4e634754d6993e73a82028d2d7c60e';

    this.getWeather();
  }

  getWeather() {
      var localTemp = 0;
      var localDesc = "";
      var localIconId = "";
      fetch(this.weatherApi)
        .then(function(response) {
            let data = response.json();
            return data;
        })
        .then(function(data) {
            localTemp = Math.floor(data.main.temp);
            localDesc = data.weather[0].description;
            localIconId = data.weather[0].icon;
        })

        this.temperature = localTemp;
        this.description = localDesc;
        this.iconId = localIconId;
  }

  showWeather() {

  }
}

var londonGetter = new WeatherGetter(51.5085, -0.1258);
var tokyoGetter = new WeatherGetter(35.6828, 139.759);
var romeGetter = new WeatherGetter(41.8933, 12.4829);
var madridGetter = new WeatherGetter(40.4167, -3.7036);
var newyorkGetter = new WeatherGetter(40.7306, -73.9867);