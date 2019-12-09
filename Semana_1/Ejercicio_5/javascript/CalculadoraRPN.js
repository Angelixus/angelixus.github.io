var rpnCalcPrototype = {
  result: "",
  localStack: "",
  stackCurrent: "",
  memory: "",
  isNumber: /^-?[0-9]+$/,
  isOperator: /^[\+\-\*\/]$/
};

rpnCalc = Object.create(rpnCalcPrototype);

rpnCalc.introducteToStack = function(input) {
  if (rpnCalc.isNumber.test(input) || rpnCalc.isOperator.test(input)) {
    rpnCalc.localStack += input;
  }

  this.showValueOnInput("numberShow", rpnCalc.localStack);
};

rpnCalc.copyToStack = function() {
    stackCurrent += localStack;
    localStack = ""

    this.showValueOnInput("numberShow", rpnCalc.localStack);
    this.showValueOnInput("stackShow", rpnCalc.stackCurrent)
}

rpnCalc.showValueOnInput = function(id, text) {
  document.getElementById(id).value = text;
};

rpnCalc.calculate = function(input) {
    stackCurrent += input;
    rpnCalc.tryResult()
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
          var partialRes = eval(operand1 + token + operand2);
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
    rpnCalc.stackCurrent = "";
    rpnCalc.localStack = "";
    rpnCalc.result = "";
  } else {
    rpnCalc.stackCurrent = "";
    rpnCalc.localStack = "";
    rpnCalc.result = stackForEvaluation.pop();
  }
  this.showValueOnInput("numberShow", rpnCalc.result);
};

rpnCalc.clearAll = function() {
    rpnCalc.stackCurrent = ""
    rpnCalc.result = ""
    rpnCalc.localStack = ""
}
