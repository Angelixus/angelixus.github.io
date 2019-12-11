class EURToUSDConverter {
    constructor() {

    }

    convert() {
        try {
            document.getElementById('usdOut').value = parseFloat(document.getElementById('eurInput').value * 1.1077);
        } catch(e) {
            document.getElementById('eurInput').value = '';
            document.getElementById('usdOut').value = '';
        }
    }
}

var converter = new EURToUSDConverter();