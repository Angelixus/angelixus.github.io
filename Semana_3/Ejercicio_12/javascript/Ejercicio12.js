class GeoLocalizacion {
    constructor() {
        this.geolocation = navigator.geolocation;
        this.lat = 0;
        this.long = 0;
    }

    getUserPos() {
        var objectReference = this;
        this.geolocation.getCurrentPosition(function(position) {
            alert('Localización obtenida satisfactoriamente')

            objectReference.lat = position.coords.latitude;
            objectReference.long = position.coords.longitude;

            $('#latitudeP').text('Latitud: ' + objectReference.lat.toString())
            $('#longitudeP').text('Longitud: ' + objectReference.long.toString())
        }, function(error) {
            if(err.code == 1) {
                alert("Error: No se ha permitido el acceso a la geolocalización");
             } else if( err.code == 2) {
                alert("Error: La geolocalización no esta disponible");
             }
        })
    }
}

var gelocation = new GeoLocalizacion()