import Data from "../scripts/config.js";
import resetWeather from "../scripts/resetWeather.js";
import variables from "../scripts/variables.js";
import weekdays from "../scripts/arrays.js";
// checking the action for specific key (Enter)
const keyCheck = (event) => {
  if (event.key === "Enter") {
    // Store target in variable
    const thisCity = event.currentTarget.value.toLowerCase();
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/forecast/?q=" +
      thisCity +
      "&appid=" +
      Data.key;
    event.currentTarget.value = "";
    // Fetching first api to get the City coordinates
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const lon = data.city.coord.lon;
        const lat = data.city.coord.lat;

        variables.cityNameContainer.innerHTML = data.city.name;

        // Fetching final data according to the coordinates
        fetch(
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&cnt=5&units=metric&exclude=minutely,hourly,alerts&appid=" +
          Data.key
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(
              "Welcome to this basic weather app. this is not a product but the product of an academic exercise."
            );

            // Removing all child elements from Container
            resetWeather();
            // Looping through 5 days of weather data
            for (let i = 0; i < 5; i++) {
              // Use the remainder operator (%) to switch from saturday (last in array) back to sunday (first in array)
              const date = new Date();
              let dayOfTheWeek = weekdays[(date.getDay() + i) % 7];
              const data = result.daily[i];
              // Create the elements with Data
              const card = document.createElement("div");
              card.classList.add("card");
              variables.container.appendChild(card);

              const imageBox = document.createElement("div");
              imageBox.classList.add("imgBx");
              card.appendChild(imageBox);

              const cardImg = document.createElement("img");
              cardImg.src =
                "http://openweathermap.org/img/wn/" +
                data.weather[0].icon +
                "@2x.png";
              imageBox.appendChild(cardImg);

              const contentBox = document.createElement("div");
              contentBox.classList.add("contentBx");
              card.appendChild(contentBox);

              const cardHeader = document.createElement("h2");
              cardHeader.innerHTML = dayOfTheWeek;
              contentBox.appendChild(cardHeader);

              const tempDescription = document.createElement("h4");
              tempDescription.innerHTML = data.weather[0].description;
              contentBox.appendChild(tempDescription);

              const currentTempBox = document.createElement("div");
              currentTempBox.classList.add("color");
              contentBox.appendChild(currentTempBox);

              const currentTempHeader = document.createElement("h3");
              currentTempHeader.innerHTML = "Temp:";
              currentTempBox.appendChild(currentTempHeader);

              const currentTemp = document.createElement("span");
              currentTemp.classList.add("current-temp");
              currentTemp.innerHTML = data.temp.day + "°C";
              currentTempBox.appendChild(currentTemp);

              const minMaxTemperatures = document.createElement("div");
              minMaxTemperatures.classList.add("details");
              contentBox.appendChild(minMaxTemperatures);

              const minMaxTempHeader = document.createElement("h3");
              minMaxTempHeader.innerHTML = "More:";
              minMaxTemperatures.appendChild(minMaxTempHeader);

              const minTemp = document.createElement("span");
              minTemp.classList.add("min-temp");
              minTemp.innerHTML = data.temp.min + "°C";
              minMaxTemperatures.appendChild(minTemp);

              const maxTemp = document.createElement("span");
              maxTemp.classList.add("max-temp");
              maxTemp.innerHTML = data.temp.max + "°C";
              minMaxTemperatures.appendChild(maxTemp);
            }
          });
      })
      .catch((error) => { // eslint-disable-line no-use-before-define
        // If there are errors, send out an error message
        console.error("Error:", "not a place!");
        while (variables.container.firstChild) {
          variables.container.removeChild(variables.container.firstChild);
        }
        return alert("Are you sure you aren't holding your map upside down?");
      });
  }
};
// Event will start on a keyup action
variables.searchBar.addEventListener("keyup", keyCheck);
