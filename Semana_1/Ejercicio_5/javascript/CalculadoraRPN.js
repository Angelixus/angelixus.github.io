var rpnCalcPrototype = {
  localStack: "",
  stackCurrent: [],
  memory: "",
  isNumber: /^-?\d+(\.?-?\d+)*$/,
  containsNumber: /[0-9]+/,
  isOperator: /^[\+\-\*\/]$/
};

rpnCalc = Object.create(rpnCalcPrototype);

rpnCalc.introducteToStack = function(input) {
  if (rpnCalc.isNumber.test(input) || rpnCalc.isOperator.test(input) || input == '.') {
    if(!(input == '.' && rpnCalc.localStack.includes('.')) || !(!rpnCalc.containsNumber.test(rpnCalc.localStack) && input == '.')) {
        rpnCalc.localStack += input;
    }
  }

  this.showValueOnInput("numberShow", rpnCalc.localStack);
};

rpnCalc.copyToStack = function() {
    rpnCalc.stackCurrent.push(rpnCalc.localStack);
    rpnCalc.localStack = ""

    this.showValueOnInput("numberShow", rpnCalc.localStack);

    var localStackRepresentation = ""
    for(token of rpnCalc.stackCurrent) {
        localStackRepresentation += token + ","
    }
    this.showValueOnInput("stackShow", localStackRepresentation)
}

rpnCalc.showValueOnInput = function(id, text) {
  document.getElementById(id).value = text;
};

rpnCalc.calculate = function(input) {
    rpnCalc.stackCurrent.push(input);
    rpnCalc.tryResult()

    this.showValueOnInput("stackShow", "")
}

rpnCalc.tryResult = function() {
  stackForEvaluation = [];
  var happenedProblem = false;

  for (token of rpnCalc.stackCurrent) {
    if (rpnCalc.isNumber.test(token)) {
      stackForEvaluation.push(token);
    } else if (rpnCalc.isOperator.test(token)) {
      try {
        var operand1 = stackForEvaluation.pop();
        var operand2 = stackForEvaluation.pop();

        if (
          rpnCalc.isNumber.test(operand1) &&
          rpnCalc.isNumber.test(operand2)
        ) {
          var partialRes = eval(operand1 + token + operand2).toString();
          stackForEvaluation.push(partialRes);
        } else {
          happenedProblem = true;
          break;
        }
      } catch (e) {
        happenedProblem = true;
        break;
      }
    }
  }
  if (happenedProblem) {
    rpnCalc.stackCurrent = [];
    rpnCalc.localStack = "";
  } else {
    rpnCalc.stackCurrent = [];
    rpnCalc.localStack = stackForEvaluation.pop();
  }
  this.showValueOnInput("numberShow", rpnCalc.localStack);
};

rpnCalc.clearAll = function() {
    rpnCalc.stackCurrent = []
    rpnCalc.localStack = ""

    this.showValueOnInput("numberShow", "");
    this.showValueOnInput("stackShow", "")
}

rpnCalc.sin = function() {
    value = rpnCalc.localStack
    try {
        value = Math.sin(value)
    } catch(e) {
        console.log(e)
    }

    rpnCalc.localStack = value

    this.showValueOnInput("numberShow", rpnCalc.localStack);
}

rpnCalc.cos = function() {
    value = rpnCalc.localStack
    try {
        value = Math.cos(value)
    } catch(e) {
        console.log(e)
    }

    rpnCalc.localStack = value

    this.showValueOnInput("numberShow", rpnCalc.localStack);
}

rpnCalc.tan = function() {
    value = rpnCalc.localStack
    try {
        value = Math.tan(value)
    } catch(e) {
        console.log(e)
    }

    rpnCalc.localStack = value

    this.showValueOnInput("numberShow", rpnCalc.localStack);
}