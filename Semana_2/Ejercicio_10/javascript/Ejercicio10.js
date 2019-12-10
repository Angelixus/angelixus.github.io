class Converter {
  constructor() {
    this.api = "https://api.exchangeratesapi.io/latest";
  }

  convert(inputId) {
    var eurVal = parseFloat($(inputId).val());
    
    if (isNaN(eurVal)) {
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
          $("#usdOut").val((eurVal * json.rates.USD).toFixed(2));
          $("#audOut").val((eurVal * json.rates.AUD).toFixed(2));
          $("#cadOut").val((eurVal * json.rates.CAD).toFixed(2));
          $("#plnOut").val((eurVal * json.rates.PLN).toFixed(2));
          $("#mxnOut").val((eurVal * json.rates.MXN).toFixed(2));
        }
      });
    }
  }
}

var converter = new Converter();
