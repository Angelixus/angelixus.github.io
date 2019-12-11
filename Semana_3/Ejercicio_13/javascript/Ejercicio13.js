class FileInfoShow {
  constructor() {

  }

  readFiles(eventObject) {
    var file = eventObject.target.files[0]

    $('#fileName').val('Nombre del Archivo: ' + file.name)
    $('#fileSize').val('Tamaño del Archivo: ' + file.size + ' bytes')
    $('#fileType').val('Tipo del Archivo: ' + file.type)
  }
}

var fileShow = new FileInfoShow()