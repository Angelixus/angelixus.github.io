class FileInfoShow {
  constructor() {

  }

  readFiles(eventObject) {
    var file = eventObject.target.files[0]

    $('#fileName').text('Nombre del Archivo: ' + file.name)
    $('#fileSize').text('Tamaño del Archivo: ' + file.size + ' bytes')
    $('#fileType').text('Tipo del Archivo: ' + file.type)
  }
}

var fileShow = new FileInfoShow()