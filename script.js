const weatherApp = {
  apiKey: "b190a0605344cc4f3af08d0dd473dd25",
  getWeather: function(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
      .then(response => response.json())
      .then(data => {
        this.displayWeather(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  },
  displayWeather: function(data) {
    const cityElement = document.querySelector('.city');
    const tempElement = document.querySelector('.temp');
    const wind=document.querySelector('.humidity');
    const dis=document.querySelector('.description');
    const op=document.querySelector('.open');
    const card=document.querySelector('.card');
    const lat=document.querySelector('.wind')
    cityElement.textContent = `Weather of ${data.name}`;
    tempElement.textContent = `${data.main.temp}°C`; 
     wind.textContent=`Wind speed is: ${((data.wind.speed))} km/h`
     dis.textContent=`${data.weather[0].main}`
     op.style.opacity = 0;
     lat.textContent=`Latitude: ${data.coord.lat} and Longitude: ${data.coord.lon}`
     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + data.name + "')"
    },
  
};

document.querySelector(".search button").addEventListener("click", function() {
  const cityName = document.querySelector(".search input").value;
  weatherApp.getWeather(cityName);
});
document.querySelector(".searchbar").addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    const cityName = document.querySelector(".search input").value;
    weatherApp.getWeather(cityName);
  }
});







