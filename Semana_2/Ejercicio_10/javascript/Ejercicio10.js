class Converter {
  constructor(htmlwrapper) {
    this.api = "http://data.fixer.io/api/latest?access_key=fb1bbcdec0121b41137b4efd51b7c6e2&symbols=USD,AUD,CAD,PLN,MXN&format=1";
    this.htmlwrapper = htmlwrapper
  }

  convert(inputVal) {
    try {
      var eurVal = parseFloat(this.htmlwrapper.readFromHtml(inputVal))

      var objectReference = this;
      fetch(this.api)
      .then(function(response) {
        let data = response.json();
        return data;
      })
      .then(function(data) {
        objectReference.htmlwrapper.writeToHTML('#usdOut', eurVal * data.rates.USD)
        objectReference.htmlwrapper.writeToHTML('#audOut', eurVal * data.rates.AUD)
        objectReference.htmlwrapper.writeToHTML('#cadOut', eurVal * data.rates.CAD)
        objectReference.htmlwrapper.writeToHTML('#plnOut', eurVal * data.rates.PLN)
        objectReference.htmlwrapper.writeToHTML('#mxnOut', eurVal * data.rates.MXN)
      })
    } catch(e) {
      this.htmlwrapper.writeToHTML('#eurInput', '')
      this.htmlwrapper.writeToHTML('#usdOut', '')
      this.htmlwrapper.writeToHTML('#audOut', '')
      this.htmlwrapper.writeToHTML('#cadOut', '')
      this.htmlwrapper.writeToHTML('#plnOut', '')
      this.htmlwrapper.writeToHTML('#mxnOut', '')
    }
  }
}

class HtmlWrapper {
  constructor() {

  }

  writeToHTML(id, toWrite) {
    document.getElementById(id).value = toWrite;
  }

  readFromHtml(id) {
    return document.getElementById(id).value;
  }
}

var converter = new Converter(new HtmlWrapper());