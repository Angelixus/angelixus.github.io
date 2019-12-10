class WeatherGetter {
  constructor(optionName, lat, long) {
    this.lat = lat;
    this.long = long;
    this.temperature = 0;
    this.description = "";
    this.iconId = "";
    this.cityCountry = "";
    this.optionName = optionName;

    this.weatherApi =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      this.lat.toString() +
      "&lon=" +
      this.long.toString() +
      "&units=metric&appid=4a4e634754d6993e73a82028d2d7c60e";

    this.getWeather();
  }

  getWeather() {
    var objectReference = this;
    fetch(this.weatherApi)
      .then(function(response) {
        let data = response.json();
        return data;
      })
      .then(function(data) {
        objectReference.temperature = Math.round(data.main.temp);
        objectReference.description = data.weather[0].description;
        objectReference.iconId = data.weather[0].icon;
        objectReference.cityCountry = data.name + ", " + data.sys.country;
      })
      .then(function() {
        var selectedName = "";
        $("#citySelect > option").each(function() {
          if ($(this).prop("selected") == true) {
            selectedName = $(this).prop("value");
          }
        });

        if (selectedName == objectReference.optionName) {
          objectReference.showWeather();
        }
      });
  }

  showWeather() {
    $(".weatherImage").attr("src", "icons/" + this.iconId + ".png");
    $(".temperature-value").text(this.temperature.toString() + "ºC");
    $(".temperature-description").text(this.description);
    $(".place").text(this.cityCountry);
  }
}

var londonGetter = new WeatherGetter("london", 51.5085, -0.1258);
var tokyoGetter = new WeatherGetter("tokyo", 35.6828, 139.759);
var romeGetter = new WeatherGetter("rome", 41.8933, 12.4829);
var madridGetter = new WeatherGetter("madrid", 40.4167, -3.7036);
var newyorkGetter = new WeatherGetter("newyork", 40.7306, -73.9867);

$("#citySelect").change(function() {
  if ($(this).prop("value") == "london") {
    londonGetter.showWeather();
  }
  if ($(this).prop("value") == "madrid") {
    madridGetter.showWeather();
  }

  if ($(this).prop("value") == "rome") {
    romeGetter.showWeather();
  }
  if ($(this).prop("value") == "newyork") {
    newyorkGetter.showWeather();
  }

  if ($(this).prop("value") == "tokyo") {
    tokyoGetter.showWeather();
  }
});