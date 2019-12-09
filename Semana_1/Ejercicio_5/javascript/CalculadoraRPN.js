var rpnCalcPrototype = {
  result: "",
  stackCurrent: "",
  memory: "",
  isNumber: /^-?[0-9]+$/,
  isOperator: /^[\+\-\*\/]$/
};

rpnCalc = Object.create(rpnCalcPrototype);

rpnCalc.introducteToStack = function(input) {
  if (rpnCalc.isNumber.test(input) || rpnCalc.isOperator.test(input)) {
    rpnCalc.stackCurrent += input;
  }

  this.showValueOnInput("numberShow", rpnCalc.stackCurrent);
};

rpnCalc.showValueOnInput = function(id, text) {
  document.getElementById(id).value = text;
};

rpnCalc.tryResult = function() {
  stackForEvaluation = [];
  for (token of rpnCalc.stackCurrent) {
    if (rpnCalc.isNumber.test(token)) {
      stackForEvaluation.push(token);
    } else if (rpnCalc.isOperator.test(token)) {
        try {
            var operand1 = stackForEvaluation.pop();
            var operand2 = stackForEvaluation.pop();

            if(rpnCalc.isNumber.test(operand1) && rpnCalc.isNumber.test(operand2)) {
                var partialRes = eval(operand1 + token + operand2)
                stackForEvaluation.push(partialRes)
            } else {
                stackCurrent = ""
                result = ""
                break
            }
        } catch(e) {
            stackCurrent = ""
            result = ""
            break
        }
    }
  }

  this.showValueOnInput("numberShow", rpnCalc.result);
};
