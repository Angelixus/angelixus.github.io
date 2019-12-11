class GeoLocalizacion {
  constructor() {
    this.lat = 0;
    this.long = 0;

    this.getUserPos();
  }

  getUserPos() {
    if (navigator.geolocation) {
      var objectReference = this;
      navigator.geolocation.getCurrentPosition(
        function(position) {
          alert("Localización obtenida satisfactoriamente");

          objectReference.lat = position.coords.latitude;
          objectReference.long = position.coords.longitude;

          $("#latitudeP").text("Latitud: " + objectReference.lat.toString());
          $("#longitudeP").text("Longitud: " + objectReference.long.toString());
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
}

var gelocation = new GeoLocalizacion();
