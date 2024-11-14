Scientific Calculator
A web-based scientific calculator built with HTML, CSS, and JavaScript. This calculator performs both basic operations (addition, subtraction, multiplication, division) and scientific functions (sine, cosine, tangent, logarithms, square root, and exponentiation).

Features
Basic Operations: Addition, subtraction, multiplication, division.
Scientific Functions: Trigonometric functions (sin, cos, tan), logarithm, square root, exponentiation.
Clear Function: Reset the display to start a new calculation.
Responsive Design: Calculator layout adjusts for different screen sizes.
Project Structure
index.html - Contains the HTML structure of the calculator.
styles.css - Provides styling and layout for the calculator UI.
script.js - Contains the JavaScript logic for handling calculations.
Getting Started
Prerequisites
To use this calculator, you only need a web browser.

Installation
Clone this repository:
bash
Copy code
git clone https://github.com/pavithracse923/scientific-calculator.git
Navigate to the project folder:
bash
Copy code
cd scientific-calculator
Open index.html in your preferred web browser.
Usage
Open the Calculator: Launch index.html in a web browser.
Enter Numbers and Operations:
Click number buttons (0-9) to enter digits.
Select operators (+, -, *, ÷) for basic operations.
Use scientific function buttons like sin, cos, tan, ln, and √ for more complex calculations.
For exponentiation, use the x^y button (powered by ** in JavaScript).
Calculate: Press = to evaluate the expression.
Clear: Press C to reset the display.
Code Overview
Display Management: The calculator display is updated in real-time as you input values or functions.
JavaScript Logic:
appendNumber(number): Adds a number to the display.
appendOperator(operator): Adds an operator to the display.
appendFunction(func): Adds a scientific function (e.g., Math.sin() to the display.
calculate(): Evaluates the expression using JavaScript's eval() function.
clearDisplay(): Resets the display and clears the current expression.
Technologies Used
HTML: Structure and layout.
CSS: Styling, including responsive grid layout.
JavaScript: Calculator functionality and scientific calculations.
Example Calculations
Basic Calculation:

Input: 3 + 4 * 2
Output: 11
Scientific Calculation:

Input: sin(30) (assuming input in radians)
Output: 0.5
Exponentiation:

Input: 3 ** 2
Output: 9
Future Enhancements
Additional scientific functions (e.g., factorial, power of 10).
Option to switch between radians and degrees for trigonometric functions.
Enhanced error handling for invalid input.
License
This project is open-source and available under the MIT License.
