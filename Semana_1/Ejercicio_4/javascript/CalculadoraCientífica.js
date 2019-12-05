var basicCalcPrototype = {
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

scientificCalc = Object.create(basicCalcPrototype, {
  "matchExpression": {
    value: /^(\(?|-?\d+(\.?-?\d+)*|[\+\-\*\/\^sqrt]|-?\d+(\.?-?\d+)*|\)?)*$/
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
            if(scientificCalc.expression.includes('^')) {
              scientificCalc.expression = scientificCalc.expression.replace("^", ",");
              scientificCalc.expression = "Math.pow(" + scientificCalc.expression;
              scientificCalc.expression += ')';
              value = eval(scientificCalc.expression).toString();
            }
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

scientificCalc.sin = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    scientificCalc.expression = Math.sin(scientificCalc.expression)
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.cos = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    scientificCalc.expression = Math.cos(scientificCalc.expression)
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.tan = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    scientificCalc.expression = Math.tan(scientificCalc.expression)
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.sec = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    scientificCalc.expression = 1 / Math.cos(scientificCalc.expression)
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.cosec = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    scientificCalc.expression = 1 / Math.sin(scientificCalc.expression)
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.cotan = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    scientificCalc.expression = 1 / Math.tan(scientificCalc.expression)
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.ln = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    var num = eval(scientificCalc.expression)
    if(num >= 0) {
      scientificCalc.expression = Math.log(scientificCalc.expression)
    } else {
      scientificCalc.expression = ""
    }
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.log = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    var num = eval(scientificCalc.expression)
    if(num >= 0) {
      scientificCalc.expression = Math.log10(scientificCalc.expression)
    } else {
      scientificCalc.expression = ""
    }
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.sqrt = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    var num = eval(scientificCalc.expression)
    if(num >= 0) {
      scientificCalc.expression = Math.sqrt(scientificCalc.expression);
    } else {
      scientificCalc.expression = "";
    }
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.fact = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    var num = eval(scientificCalc.expression)
    if(num >= 0) {
      var accum = num--;
      while(num > 0) {
        accum *= num--;
      }
      scientificCalc.expression = accum.toString();
    } else {
      scientificCalc.expression = "";
    }
  }

  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}

scientificCalc.tenpowerx = function() {
  if(scientificCalc.stackForBrackets.length == 0 && scientificCalc.matchExpression.test(scientificCalc.expression)) {
    value = scientificCalc.expression
    try {
      value = Math.pow(10, eval(value))
    } catch(e) {
      value = "";
    }

    scientificCalc.expression = value;
  }
  scientificCalc.showValueOnInput('numberShow', scientificCalc.expression)
}