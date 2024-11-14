let displayValue = '';  // Store the display content

// Function to update display
function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = displayValue || '0';
}

// Function to clear display and reset values
function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

// Function to append numbers to the display
function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

// Function to append operators to the display
function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

// Function to append scientific functions
function appendFunction(func) {
  displayValue += func;
  updateDisplay();
}

// Function to evaluate and calculate the expression
function calculate() {
  try {
    // Use eval to calculate the result of the expression
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';  // Handle invalid expressions
  }
  updateDisplay();
}
