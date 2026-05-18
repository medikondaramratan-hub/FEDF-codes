<!DOCTYPE html>
<html>
<head>
  <title>Arrow Functions Arithmetic</title>
</head>
<body>
<h2>Arrow Functions Arithmetic Operations</h2>
<button onclick="calculate()">Calculate</button>
<p id="output"></p>
<script>
function calculate() {
  // Arrow Functions
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  const modulus = (a, b) => a % b;

  let a = 20;
  let b = 5;

  let result = `
    Addition: ${add(a, b)} <br>
    Subtraction: ${subtract(a, b)} <br>
    Multiplication: ${multiply(a, b)} <br>
    Division: ${divide(a, b)} <br>
    Modulus: ${modulus(a, b)}
  `;
  document.getElementById("output").innerHTML = result;
}
</script>
</body>
</html>