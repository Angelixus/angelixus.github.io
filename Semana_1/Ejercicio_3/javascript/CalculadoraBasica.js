const statusEnum = {
  CREATING: 1,
  ASSESSABLE: 2
};

var baseCalcPrototype = {
  expression: ""
};

baseCalc = Object.create(baseCalcPrototype, {
  "matchExpression": {
    value: /^\d+(\.?\d+)*[\+\-\*\/]\d+(\.?\d+)*(=|[\+\-\*\/])$/
  },

  "isOperator": {
    value: /^[\+\-\*\/]$/
  },

  "partialError" : {
    value: /[\+\-\*\/=][\+\-\*\/=]+/
  }
});

baseCalc.validateInputForPossibleResult = function(input) {
  baseCalc.expression += input;

  if (baseCalc.matchExpression.test(baseCalc.expression)) {
    baseCalc.expression = baseCalc.expression.substring(
      0, baseCalc.expression.length - 1);
    baseCalc.expression = eval(baseCalc.expression);

    if(baseCalc.isOperator.test(input)) {
        baseCalc.expression += input;
    }
  }

  if(baseCalc.partialError.test(input) || input == '=') {
    baseCalc.expression = '';
  }

  this.showValueOnInput("numberShow", baseCalc.expression);
};

baseCalc.validateInputClear = function() {
  baseCalc.expression = "";
  this.showValueOnInput("numberShow", "");
};

baseCalc.showValueOnInput = function(id, text) {
  document.getElementById(id).value = text;
};
