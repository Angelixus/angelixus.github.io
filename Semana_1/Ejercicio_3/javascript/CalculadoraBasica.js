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
  }
});

baseCalc.validateInputForPossibleResult = function(input) {
  baseCalc.expression += input;

  console.log(input);

  if (baseCalc.matchExpression.test(baseCalc.expression)) {
    baseCalc.expression = baseCalc.expression.substring(
      0, baseCalc.expression.length - 1);
    baseCalc.expression = eval(baseCalc.expression);

    if(baseCalc.isOperator.test(input)) {
        baseCalc.expression += input;
    }
  }
  this.showValueOnInput("numberShow", baseCalc.expression);
};

baseCalc.validateInputClear = function() {
  baseCalc.expression = "";
  this.showValueOnInput("numberShow", "");
};

baseCalc.showValueOnInput = function(id, text) {
  document.getElementById(id).textContent = text;
};
