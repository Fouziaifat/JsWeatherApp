let SearchBar = document.querySelector(".Search-bar")
let btn = document.querySelector(".submit")
let inputValue = document.querySelector(".cityname")
let temp = document.querySelector(".temp")
let desc = document.querySelector(".description")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")

let apiKey = "baeaa9dd4ba7c67a06d7a1473c1dc31d"

btn.addEventListener("click",()=> {
  let cityName = SearchBar.value
  console.log(cityName);

  let api = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
  fetch(api)
    .then(res => res.json())
    .then(data => {
      let tempValue = data.main.temp;
      cityName = data.name;
      let descValue = data.weather[0].description;
      let humidityValue = data.main.humidity;
      let windValue =  data.wind.speed;

      tempValue = Math.round(tempValue - 273.15);

      inputValue.innerHTML = cityName;
      temp.innerHTML = tempValue + "°C";
      desc.innerHTML = descValue;
      humidity.innerHTML ="<b>humidity : </b>" + humidityValue + "%";
      wind.innerHTML = "<b>Wind : </b>" + windValue + "km/h";
      console.log(data, tempValue, cityName, descValue);
    })
})