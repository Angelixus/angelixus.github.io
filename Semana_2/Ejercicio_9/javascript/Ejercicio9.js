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
      "&mode=xml&units=metric&appid=4a4e634754d6993e73a82028d2d7c60e";

    this.getWeather();
  }

  getWeather() {
    var objectReference = this;

    $.ajax({
      type: "GET",
      url: objectReference.weatherApi,
      //data: paramsData,
      dataType: "xml",
      success: function(xml){
        objectReference.temperature = Math.round(parseFloat(xml.getElementsByTagName('temperature').getAttribute('value')))
        objectReference.description = xml.getElementsByTagName('weather').getAttribute('value')
        objectReference.iconId = xml.getElementsByTagName('weather').getAttribute('icon')
        objectReference.cityCountry = xml.getElementsByTagName('city').getAttribute('name') + ', ' + xml.getElementsByTagName('country')

        var selectedName = "";
        $("#citySelect > option").each(function() {
          if ($(this).prop("selected") == true) {
            selectedName = $(this).prop("value");
          }
        });

        if (selectedName == objectReference.optionName) {
          objectReference.showWeather();
        }
      }
  });

    /*
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
      */
       
  }

  showWeather() {
    $(".weatherImage").attr("src", "icons/" + this.iconId + ".png");
    $(".temperature-value").text(this.temperature.toString() + "ºC");
    $(".temperature-description").text(this.description);
    $(".place").text(this.cityCountry);
  }
}

class LocationManager {
  constructor(london, tokyo, rome, madrid, newyork) {
    this.london = london;
    this.tokyo = tokyo;
    this.rome = rome;
    this.madrid = madrid;
    this.newyork = newyork;
    this.initializeListeners();
  }

  initializeListeners() {
    var objectReference = this;
    $(document).ready(function() {
      $("#citySelect").on("change", function() {
        if ($(this).prop("value") == "london") {
          objectReference.london.showWeather();
        }
        if ($(this).prop("value") == "madrid") {
          objectReference.madrid.showWeather();
        }

        if ($(this).prop("value") == "rome") {
          objectReference.rome.showWeather();
        }
        if ($(this).prop("value") == "newyork") {
          objectReference.newyork.showWeather();
        }

        if ($(this).prop("value") == "tokyo") {
          objectReference.tokyo.showWeather();
        }
      });
    });
  }
}

var londonGetter = new WeatherGetter("london", 51.5085, -0.1258);
var tokyoGetter = new WeatherGetter("tokyo", 35.6828, 139.759);
var romeGetter = new WeatherGetter("rome", 41.8933, 12.4829);
var madridGetter = new WeatherGetter("madrid", 40.4167, -3.7036);
var newyorkGetter = new WeatherGetter("newyork", 40.7306, -73.9867);

new LocationManager(
  londonGetter,
  tokyoGetter,
  romeGetter,
  madridGetter,
  newyorkGetter
);
