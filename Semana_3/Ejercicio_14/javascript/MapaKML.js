class GeoLocalizacion {
  constructor() {
    this.googleStaticApi = "";

    var objectReference = this;
    window.onload = function() {
      objectReference.initMap()
    }    
  }

  initMap() {
    var src = 'archivos/1.kml'
    var pos = { lat: 43.027502, lng: -6.246995 };
    var map = new google.maps.Map(document.getElementById("actualMap"), {
      center: pos,
      zoom: 16,
    });

    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: map
    });

    /*
    kmlLayer.addListener('click', function(event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById('capture');
      testimonial.innerHTML = content;
    });
    */

  }
}

var geolocation = new GeoLocalizacion();
