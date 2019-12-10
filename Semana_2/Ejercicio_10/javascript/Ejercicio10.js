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
          $("#usdOut").val(eurVal * json.rates.USD);
          $("#audOut").val(eurVal * json.rates.AUD);
          $("#cadOut").val(eurVal * json.rates.CAD);
          $("#plnOut").val(eurVal * json.rates.PLN);
          $("#mxnOut").val(eurVal * json.rates.MXN);        
        }
    });
    } catch (e) {
      $("#eurInput").val("");
      $("#usdOut").val("");
      $("#audOut").val("");
      $("#cadOut").val("");
      $("#plnOut").val("");
      $("#mxnOut").val("");
    }

    
  }
}

var converter = new Converter();
