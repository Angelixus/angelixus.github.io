class Converter {
  constructor() {
    this.api = "https://api.exchangeratesapi.io/latest";
  }

  convert(inputId) {
    //try {
      //var eurVal = parseFloat($(inputId).val());
      var objectReference = this;

      $.ajax({
        url: objectReference.api,
        dataType: "json",
        success: function(json){
          console.log(json)
        }
    });

    /*
    
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

    */
  }
}

var converter = new Converter();
