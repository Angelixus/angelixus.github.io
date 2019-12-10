class Converter {
  constructor() {
    this.api = "https://api.exchangeratesapi.io/latest";
  }

  convert(inputId) {
    var eurVal = parseFloat($(inputId).val());

    if (eurVal == NaN) {
      $("#eurInput").val("");
      $("#usdOut").val("");
      $("#audOut").val("");
      $("#cadOut").val("");
      $("#plnOut").val("");
      $("#mxnOut").val("");
    } else {
      var objectReference = this;

      $.ajax({
        url: objectReference.api,
        dataType: "json",
        success: function(json) {
          $("#usdOut").val(eurVal * json.rates.USD);
          $("#audOut").val(eurVal * json.rates.AUD);
          $("#cadOut").val(eurVal * json.rates.CAD);
          $("#plnOut").val(eurVal * json.rates.PLN);
          $("#mxnOut").val(eurVal * json.rates.MXN);
        }
      });
    }
  }
}

var converter = new Converter();
