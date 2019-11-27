var baseCalcPrototype = {
  expression: "",
  memory: "",
  isOperator : /^[\+\-\*\/]$/,
  cannotBeFirst : /^[\+\*\/=]$/,
  partialError : /[\+\-\*\/=][\+\-\*\/=]+/,
  isNumber : /^-?[0-9]+$/,

    validateInputClear : function() {
    scientificCalc.expression = "";
    this.showValueOnInput("numberShow", "");
  },

  setMemory : function() {
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
  },

  sumToMemory : function() {
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
  },

  substractToMemory : function() {
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

};

scientificCalc = Object.create(baseCalcPrototype, {
  "matchExpression": {
    value: /^(\(?|-?\d+(\.?-?\d+)*|[\+\-\*\/]|-?\d+(\.?-?\d+)*|\)?)*$/
  },

  "stackForBrackets" : {
    value: []
  }
});

scientificCalc.validateInputForPossibleResult = function(input) {
  if(!(scientificCalc.expression.length == 0 && scientificCalc.cannotBeFirst.test(input))) {
    var possibleNumber = '';
    if(scientificCalc.expression.length > 1) {
      possibleNumber = scientificCalc.expression.substring(scientificCalc.expression.length - 1, scientificCalc.expression.length);
    }

    scientificCalc.expression += input;

    if(input == '(' || input == ')') {
      this.processStack(input);
    }

    if(input == '(' && scientificCalc.expression.length > 1 && scientificCalc.isNumber.test(possibleNumber)) {
      scientificCalc.expression = scientificCalc.expression.substring(
        0, scientificCalc.expression.length - 1);
        scientificCalc.expression += '*('
    }

    if(scientificCalc.stackForBrackets.length == 0) {
      if (scientificCalc.matchExpression.test(scientificCalc.expression)) {
        if(scientificCalc.isOperator.test(input)) {
        scientificCalc.expression = scientificCalc.expression.substring(
          0, scientificCalc.expression.length - 1);
        }
          var value = scientificCalc.expression
          try {
            value = eval(scientificCalc.expression).toString()
          } catch(e) {
            console.log(e.message)
          }
        scientificCalc.expression = value;
    
        if(scientificCalc.isOperator.test(input)) {
            scientificCalc.expression += input;
        }
      }
    }

    if(scientificCalc.partialError.test(scientificCalc.expression) || input == '=') {
      if(!(input == '-' && scientificCalc.expression.substring(scientificCalc.expression.length - 2, scientificCalc.expression.length - 1) != '-')) {
        scientificCalc.expression = '';
      }
    }
  }

  if(this.stackForBrackets.length != 0 && input == '=') {
    scientificCalc.expression = '';
  }

  this.showValueOnInput("numberShow", scientificCalc.expression);
};

scientificCalc.processStack = function(input) {
  this.stackForBrackets.push(input);

  this.stackForBrackets.pop()

  var previous = this.stackForBrackets.pop()

  if(previous == '(' || previous == ')') {
    if(previous == input || previous == ')' && input == '(') {
      this.stackForBrackets.push(previous)
      this.stackForBrackets.push(input)
    }

  } else {
    this.stackForBrackets.push(input)
  }
};

scientificCalc.showValueOnInput = function(id, text) {
  document.getElementById(id).value = text;
};

scientificCalc.deleteLast = function() {
  if(scientificCalc.expression.length > 0) {
    scientificCalc.expression = scientificCalc.expression.substring(0, scientificCalc.expression.length - 1)
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
};