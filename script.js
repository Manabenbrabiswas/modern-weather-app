const apiKey = "dc7e0005bf7d2421c267f961ba0f5168";
async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    document.getElementById("city-name").innerText = `Weather in ${data.name}`;
    document.getElementById(
      "temperature"
    ).innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById(
      "description"
    ).innerText = `Condition: ${data.weather[0].description}`;
    document.getElementById(
      "humidity"
    ).innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById(
      "wind-speed"
    ).innerText = `Wind Speed: ${data.wind.speed} m/s`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
