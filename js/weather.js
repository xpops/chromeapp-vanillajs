const TEMP_UNITS = "metric"; // celcius

async function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${TEMP_UNITS}`;
    
    const response = await fetch(url);
    const data = await response.json();

    const cityContainer = document.querySelector("#weather span:first-child");
    const weatherContainer = document.querySelector("#weather span:last-child");

    cityContainer.innerHTML = data.name;
    weatherContainer.innerHTML = data.weather[0].main;
}

function onGeoError() {
    alert("Can't locate you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);