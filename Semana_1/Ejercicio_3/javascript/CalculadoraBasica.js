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
  var splitted = scientificCalc.expression.split('.')
  var areValid = true;
  for(number of splitted) {
    if(!scientificCalc.isNumber.test(number)) {
      areValid = false;
      break;
    }
  }
  if(areValid) {
    scientificCalc.memory = scientificCalc.expression;
  }
  scientificCalc.expression = '';
  this.showValueOnInput("numberShow", scientificCalc.expression);
}

baseCalc.sumToMemory = function() {
  var splitted = scientificCalc.expression.split('.')
  var areValid = true;
  for(number of splitted) {
    if(!scientificCalc.isNumber.test(number)) {
      areValid = false;
      break;
    }
  }

  if(areValid) {
    scientificCalc.memory = eval(scientificCalc.memory + '+' + scientificCalc.expression)
    scientificCalc.expression = scientificCalc.memory.toString();
  }
  this.showValueOnInput("numberShow", scientificCalc.expression);
}

baseCalc.substractToMemory = function() {
  var splitted = scientificCalc.expression.split('.')
  var areValid = true;
  for(number of splitted) {
    if(!scientificCalc.isNumber.test(number)) {
      areValid = false;
      break;
    }
  }

  if(areValid) {
    scientificCalc.memory = eval(scientificCalc.memory + '-' + scientificCalc.expression)
    scientificCalc.expression = scientificCalc.memory.toString();
  }
  this.showValueOnInput("numberShow", scientificCalc.expression);
}