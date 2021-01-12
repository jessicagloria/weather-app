// ⏰Feature #1
//In your project, display the current date and time using JavaScript:
//Tuesday 16:00

let now = new Date();

let dateUpdate = document.querySelector("#date-update");
let date = now.getDate();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let year = now.getFullYear();

dateUpdate.innerHTML = `${day}, ${month} ${date} ${year}`;
let timeUpdate = document.querySelector("#time-update");
let hours = now.getHours();
let minutes = now.getMinutes();

timeUpdate.innerHTML = `// It is currently ${hours}h${minutes}`;

// 🕵️‍♀️Feature #2
//Add a search engine, when searching for a city (i.e. Paris), display
//the city name on the page after the user submits the form.

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-value");
  //console.log(searchInput.value);
  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = searchInput.value;
}

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", showCity);

// 🙀Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit.
//When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius,
//it should convert it back to Celsius.

//function changeTemperatureCelsius(event){
//  event.preventDefault();
//  alert("hello");
//}

function changeTemperatureFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#celsius");
  temperatureElement.innerHTML = 66;
}

function changeTemperatureCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#celsius");
  temperatureElement.innerHTML = 19;
}

let celsiusTemp = document.querySelector("#celsius-temperature");
celsiusTemp.addEventListener("click", changeTemperatureCelsius);

let fahrenheitTemp = document.querySelector("#fahrenheit-temperature");
fahrenheitTemp.addEventListener("click", changeTemperatureFahrenheit);
