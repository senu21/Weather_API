// Function to initialize the map
function initMap() {
    // Specify the coordinates to center the map
    var centerCoordinates = { lat: 0, lng: 0 };
  
    // Create a map object and specify the DOM element for display
    var map = L.map('map').setView([centerCoordinates.lat, centerCoordinates.lng], 3); // Set initial zoom level
  
    // Add a base layer to the map (optional)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Function to fetch mock weather data from the API
    function fetchWeatherData() {
      // Replace this with actual API endpoint URL to fetch weather data
      var apiUrl = 'https://api.example.com/weather';
  
      // Make a fetch request to the API
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Process the weather data and display it on the map
          data.forEach(weather => {
            // Extract latitude, longitude, and other weather parameters from data
            var latitude = weather.latitude;
            var longitude = weather.longitude;
            var temperature = weather.temperature;
            var humidity = weather.humidity;
            var airPressure = weather.airPressure;
  
            // Create a marker with a popup displaying weather information
            var marker = L.marker([latitude, longitude]).addTo(map);
            marker.bindPopup(`
              <b>Temperature:</b> ${temperature} °C <br>
              <b>Humidity:</b> ${humidity} % <br>
              <b>Air Pressure:</b> ${airPressure} hPa
            `);
          });
        })
        .catch(error => console.error('Error fetching weather data:', error));
    }
  
    // Call the fetchWeatherData function to fetch and display weather data
    fetchWeatherData();
  }
  
  // Call the initMap function when the page is loaded
  document.addEventListener('DOMContentLoaded', initMap);
  