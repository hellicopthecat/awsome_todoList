const API_KEY = "c8c29ee9362a5f723d6f8e8b3a22b4a9";

function onGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.getElementById("weather");
      const place = document.getElementById("place");
      weather.innerText = data.weather[0].main;
      place.innerText = data.name;
    });
}

function offGeo() {
  alert("Can't Find You..");
}

navigator.geolocation.getCurrentPosition(onGeo, offGeo);
