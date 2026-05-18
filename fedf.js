<!DOCTYPE html>
<html>
<head>
  <title>Weather App</title>

  <style>

    body {
      font-family: Arial;
      text-align: center;
      margin-top: 50px;
    }

    input {
      padding: 10px;
      width: 200px;
    }

    button {
      padding: 10px 20px;
      cursor: pointer;
    }

    #result {
      margin-top: 20px;
      font-size: 22px;
      font-weight: bold;
    }

  </style>

</head>
<body>

<h2>Weather Checker</h2>

<input type="text" id="city" placeholder="Enter city">

<button onclick="checkWeather()">Check</button>

<p id="result"></p>

<script>

async function checkWeather() {

  const city = document.getElementById("city").value;

  const apiKey = "6a078cebece254466ebd766a6a091db6";

  try {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const data = await response.json();

    document.getElementById("result").innerHTML =
      `
      City: ${data.name} <br>
      Temperature: ${data.main.temp} °C <br>
      Weather: ${data.weather[0].description}
      `;

  } catch(error) {

    document.getElementById("result").innerHTML =
      "Error loading weather";

  }
}

</script>

</body>
</html>