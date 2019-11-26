var baseCalcPrototype = {
  expression: "",
  memory: "",
  isOperator : /^[\+\-\*\/]$/,
  cannotBeFirst : /^[\+\*\/=]$/,
  partialError : /[\+\-\*\/=][\+\-\*\/=]+/,
  isNumber : /^-?[0-9]+$/,

  showValueOnInput = function(id, text) {
    document.getElementById(id).value = text;
  },

    validateInputClear = function() {
    scientificCalc.expression = "";
    this.showValueOnInput("numberShow", "");
  },

  setMemory = function() {
    if(scientificCalc.isNumber.test(scientificCalc.expression)) {
      scientificCalc.memory = scientificCalc.expression;
    }
    scientificCalc.expression = '';
    this.showValueOnInput("numberShow", scientificCalc.expression);
  },

  sumToMemory = function() {
    if(scientificCalc.isNumber.test(scientificCalc.expression)) {
      scientificCalc.memory = eval(scientificCalc.memory + '+' + scientificCalc.expression)
      scientificCalc.expression = scientificCalc.memory;
    }
    this.showValueOnInput("numberShow", scientificCalc.expression);
  },

  substractToMemory = function() {
    if(scientificCalc.isNumber.test(scientificCalc.expression)) {
      scientificCalc.memory = eval(scientificCalc.memory + '-' + scientificCalc.expression)
      scientificCalc.expression = scientificCalc.memory;
    }
    this.showValueOnInput("numberShow", scientificCalc.expression);
  }

};

scientificCalc = Object.create(baseCalcPrototype, {
  "matchExpression": {
    value: /^(\(?-?\d+(\.?-?\d+)*|[\+\-\*\/]|-?\d+(\.?-?\d+)*\)?)*$/
  },

  "stackForBrackets" : {
    value: []
  }

});

scientificCalc.validateInputForPossibleResult = function(input) {
  if(!(scientificCalc.expression.length == 0 && scientificCalc.cannotBeFirst.test(input))) {
    scientificCalc.expression += input;

    if(input == '(' || input == ')') {
      stackForBrackets.push(input)
    }

    if (scientificCalc.matchExpression.test(scientificCalc.expression) && this.isValidBrackets()) {
      scientificCalc.expression = scientificCalc.expression.substring(
        0, scientificCalc.expression.length - 1);
      scientificCalc.expression = eval(scientificCalc.expression);
  
      if(scientificCalc.isOperator.test(input)) {
          scientificCalc.expression += input;
      }
    } else if(scientificCalc.partialError.test(scientificCalc.expression) || input == '=') {
      if(!(input == '-' && scientificCalc.expression.substring(scientificCalc.expression.length - 2, scientificCalc.expression.length - 1) != '-')) {
        scientificCalc.expression = '';
      }
    }
  }

  this.showValueOnInput("numberShow", scientificCalc.expression);
}

scientificCalc.isValidBrackets = function() {

}