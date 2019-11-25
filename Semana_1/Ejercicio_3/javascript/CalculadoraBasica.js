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
  },

  "memory" : {
    value = "0"
  },

  "isNumber" : {
    value: /^[0-9]+$/
  }
});

baseCalc.validateInputForPossibleResult = function(input) {
  if(!(baseCalc.expression.length == 0 && (input == '=' || baseCalc.isOperator.test(input)))) {
    baseCalc.expression += input;

    if (baseCalc.matchExpression.test(baseCalc.expression)) {
      baseCalc.expression = baseCalc.expression.substring(
        0, baseCalc.expression.length - 1);
      baseCalc.expression = eval(baseCalc.expression);
  
      if(baseCalc.isOperator.test(input)) {
          baseCalc.expression += input;
      }
    } else if(baseCalc.partialError.test(baseCalc.expression) || input == '=') {
      baseCalc.expression = '';
    }
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

baseCalc.setMemory = function() {
  var input = document.getElementById("numberShow").value;
  if(baseCalc.isNumber.test(input)) {
    baseCalc.memory = input;
  }
}

baseCalc.sumToMemory = function() {
  var input = document.getElementById("numberShow").value;
  if(baseCalc.isNumber.test(input)) {
    baseCalc.memory = eval(baseCalc.memory + '+' + input)
    baseCalc.expression = baseCalc.memory;
  }
  this.showValueOnInput("numberShow", baseCalc.expression);
}

baseCalc.substractToMemory = function() {
  var input = document.getElementById("numberShow").value;
  if(baseCalc.isNumber.test(input)) {
    baseCalc.memory = eval(baseCalc.memory + '-' + input)
    baseCalc.expression = baseCalc.memory;
  }

  this.showValueOnInput("numberShow", baseCalc.expression);
}