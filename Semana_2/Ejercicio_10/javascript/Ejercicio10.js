class Converter {
  constructor() {
    this.api = "https://api.exchangeratesapi.io/latest";
  }

  convert(inputId) {
    try {
      var eurVal = parseFloat($(inputId).val());
      var objectReference = this;

      $.ajax({
        url: objectReference.api,
        dataType: "json",
        success: function(json){
          $("#usdOut").text(eurVal * json.rates.USD);
          $("#audOut").text(eurVal * json.rates.AUD);
          $("#cadOut").text(eurVal * json.rates.CAD);
          $("#plnOut").text(eurVal * json.rates.PLN);
          $("#mxnOut").text(eurVal * json.rates.MXN);        
        }
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

var converter = new Converter();
