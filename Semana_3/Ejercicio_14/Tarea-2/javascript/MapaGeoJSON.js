class GeoLocalizacion {
  constructor() {
    this.googleStaticApi = "";

    var objectReference = this;
    window.onload = function() {
      objectReference.initMap()
    }    
  }

  initMap() {
    var src = 'https://angelixus.github.io/Semana_3/Ejercicio_14/Tarea-2/archivos/1.json'
    var pos = { lat: 43.027502, lng: -6.246995 };
    var map = new google.maps.Map(document.getElementById("actualMap"), {
      center: pos,
      zoom: 16,
    });

    map.data.loadGeoJson(src);

  }
}

var geolocation = new GeoLocalizacion();
