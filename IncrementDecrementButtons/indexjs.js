
  function incrementValue(id) {
  var inputElement = document.getElementById(id);
  var currentValue = parseInt(inputElement.value);
  inputElement.value = currentValue + 1;
}

function decrementValue(id) {
  var inputElement2 = document.getElementById(id);
  var currentValue2 = parseInt(inputElement2.value);
  if (currentValue2 > 0) { // Check if the current value is greater than zero
    inputElement2.value = currentValue2 - 1;
  }
}
