class EURToUSDConverter {
  constructor() {}

  convert() {
    var num = parseFloat(document.getElementById("eurInput").value);

    if (isNaN(num)) {
      document.getElementById("eurInput").value = "";
      document.getElementById("usdOut").value = "";
    } else {
      document.getElementById("usdOut").value = (num * 1.1077).toFixed(2);
    }
  }
}

var converter = new EURToUSDConverter();
