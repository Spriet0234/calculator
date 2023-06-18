let result = document.getElementById("result");

function appendToResult(value) {
  result.value += value;
}

function handleOperator(operator) {
  result.value += operator;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  try {
    const expression = result.value;
    const resultValue = eval(expression);
    result.value = resultValue;
  } catch (error) {
    result.value = "Error";
  }
}
