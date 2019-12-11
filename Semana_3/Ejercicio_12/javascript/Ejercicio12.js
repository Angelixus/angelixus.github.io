class GeoLocalizacion {
  constructor() {
    this.lat = 0;
    this.long = 0;

    this.googleStaticApi = "";

    var objectReference = this;
    window.onload = function() {
      objectReference.getUserPos();
    };
  }

  getUserPos() {
    if (navigator.geolocation) {
      var objectReference = this;
      navigator.geolocation.getCurrentPosition(
        function(position) {
          alert("Localización obtenida satisfactoriamente");

          objectReference.lat = position.coords.latitude;
          objectReference.long = position.coords.longitude;

          objectReference.googleStaticApi =
            "https://maps.googleapis.com/maps/api/staticmap?center=" +
            objectReference.lat +
            "," +
            objectReference.long +
            "&zoom=13&size=600x300&maptype=roadmap&markers=" +
            objectReference.lat +
            "," +
            objectReference.long +
            "&key=AIzaSyD7OJDcBX1deML4CVeVh6xgQZX4itIMrOM";

          $("#latitudeP").text("Latitud: " + objectReference.lat.toString());
          $("#longitudeP").text("Longitud: " + objectReference.long.toString());
          $("#staticMap").append(
            "<img src=" +
              objectReference.googleStaticApi +
              ' alt="Mapa de la zona donde esta el usuario"/>'
          );

          objectReference.initMap();
        },
        function(error) {
          if (error.code == 1) {
            alert("Error: No se ha permitido el acceso a la geolocalización");
          } else if (error.code == 2) {
            alert("Error: La geolocalización no esta disponible");
          }
        }
      );
    } else {
      alert("La geolocalización no esta disponible en este navegador");
    }
  }

  initMap() {
    var pos = {lat: this.lat, lng: this.long};
    var map = new google.maps.Map(document.getElementById("mainBody"), {
      center: pos,
      zoom: 8
    });

    var marker = new google.maps.Marker({position: pos, map: map})
  }
}

var geolocation = new GeoLocalizacion();
