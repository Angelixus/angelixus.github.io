class Converter {
  constructor(htmlwrapper) {
    this.api =
      "http://data.fixer.io/api/latest?access_key=fb1bbcdec0121b41137b4efd51b7c6e2&symbols=USD,AUD,CAD,PLN,MXN&format=1";
    this.htmlwrapper = htmlwrapper;
  }

  convert(inputVal) {
    try {
      var eurVal = parseFloat(this.htmlwrapper.readFromHtml(inputVal));

      var objectReference = this;
      fetch(this.api)
        .then(function(response) {
          let data = response.json();
          return data;
        })
        .then(function(data) {
          $("#usdOut").text(eurVal * data.rates.USD);
          $("#audOut").text(eurVal * data.rates.AUD);
          $("#cadOut").text(eurVal * data.rates.CAD);
          $("#plnOut").text(eurVal * data.rates.PLN);
          $("#mxnOut").text(eurVal * data.rates.MXN);
        });
    } catch (e) {
      $("#eurInput").text("");
      $("#usdOut").text("");
      $("#audOut").text("");
      $("#cadOut").text("");
      $("#plnOut").text("");
      $("#mxnOut").text("");
    }
  }
}

class HtmlWrapper {
  constructor() {}

  writeToHTML(id, toWrite) {
    document.getElementById(id).value = toWrite;
  }

  readFromHtml(id) {
    return document.getElementById(id).value;
  }
}

var converter = new Converter(new HtmlWrapper());
