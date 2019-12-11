class GeoLocalizacion {
    constructor() {
        this.lat = 0;
        this.long = 0;

        this.getUserPos()
    }

    getUserPos() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.locationGetSuccess, this.locationGetError)
        } else {
            alert("La geolocalización no esta disponible en este navegador");
        }
    }

    locationGetSuccess(position) {
        alert('Localización obtenida satisfactoriamente')

        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;

        $('#latitudeP').text('Latitud: ' + objectReference.lat.toString())
        $('#longitudeP').text('Longitud: ' + objectReference.long.toString())
    }

    locationGetError(error) {
        if(err.code == 1) {
            alert("Error: No se ha permitido el acceso a la geolocalización");
         } else if( err.code == 2) {
            alert("Error: La geolocalización no esta disponible");
         }
    }
}

var gelocation = new GeoLocalizacion()