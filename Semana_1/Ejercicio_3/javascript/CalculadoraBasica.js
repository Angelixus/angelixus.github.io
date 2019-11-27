const statusEnum = {
  CREATING: 1,
  ASSESSABLE: 2
};

var baseCalcPrototype = {
  expression: "",
  memory: ""
};

baseCalc = Object.create(baseCalcPrototype, {
  "matchExpression": {
    value: /^-?\d+(\.?-?\d+)*[\+\-\*\/]-?\d+(\.?-?\d+)*(=|[\+\-\*\/])$/
  },

  "isOperator": {
    value: /^[\+\-\*\/]$/
  },

  "cannotBeFirst" : {
    value: /^[\+\*\/=]$/
  },

  "partialError" : {
    value: /[\+\-\*\/=][\+\-\*\/=]+/
  },

  "isNumber" : {
    value: /^-?[0-9]+$/
  }
});

baseCalc.validateInputForPossibleResult = function(input) {
  if(!(baseCalc.expression.length == 0 && baseCalc.cannotBeFirst.test(input))) {
    baseCalc.expression += input;

    if (baseCalc.matchExpression.test(baseCalc.expression)) {
      baseCalc.expression = baseCalc.expression.substring(
        0, baseCalc.expression.length - 1);
      baseCalc.expression = eval(baseCalc.expression);
  
      if(baseCalc.isOperator.test(input)) {
          baseCalc.expression += input;
      }
    } else if(baseCalc.partialError.test(baseCalc.expression) || input == '=') {
      if(!(input == '-' && baseCalc.expression.substring(baseCalc.expression.length - 2, baseCalc.expression.length - 1) != '-')) {
        baseCalc.expression = '';
      }
    }
  }

  //this.showValueOnInput("numberShow", baseCalc.expression);
};

baseCalc.validateInputClear = function() {
  baseCalc.expression = "";
  this.showValueOnInput("numberShow", "");
};

baseCalc.showValueOnInput = function(id, text) {
  document.getElementById(id).value = text;
};

baseCalc.setMemory = function() {
  if(baseCalc.isNumber.test(baseCalc.expression)) {
    baseCalc.memory = baseCalc.expression;
  }
  baseCalc.expression = '';
  this.showValueOnInput("numberShow", baseCalc.expression);
}

baseCalc.sumToMemory = function() {
  if(baseCalc.isNumber.test(baseCalc.expression)) {
    baseCalc.memory = eval(baseCalc.memory + '+' + baseCalc.expression)
    baseCalc.expression = baseCalc.memory;
  }
  this.showValueOnInput("numberShow", baseCalc.expression);
}

baseCalc.substractToMemory = function() {
  if(baseCalc.isNumber.test(baseCalc.expression)) {
    baseCalc.memory = eval(baseCalc.memory + '-' + baseCalc.expression)
    baseCalc.expression = baseCalc.memory;
  }
  this.showValueOnInput("numberShow", baseCalc.expression);
}

baseCalc.validateInputForPossibleResult('1')