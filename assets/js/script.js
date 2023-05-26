let apiKey = 'd9e8fa6428a49966fe0b0aa58e369bf7';
var submitButton = document.querySelector(".btn");
let date = document.getElementById("currentDate");
let nextDate = document.getElementById("nextDay");
let twoDay = document.getElementById("twoDay");
let threeDay = document.getElementById("threeDay");
let fourDay = document.getElementById("fourDay");
let fiveDay = document.getElementById("fiveDay");
let cityList = JSON.parse(localStorage.getItem("cityNames")) || [];
let cityHistoryBtns = document.querySelector(".searchHistoryBtns");
let searchHistoryEl =  document.querySelector("#search");
let clearInput = document.querySelector('#cityValue');
let showCurrentEl = document.querySelector('.current');
let showFiveDayEl = document.querySelector('.fiveDay');
let showCardsEl = document.querySelector('.cards');

date.textContent = dayjs().format('MM/DD/YYYY');
nextDate.textContent = dayjs().add(1, "day").format('MM/DD/YYYY');
twoDay.textContent = dayjs().add(2, "day").format('MM/DD/YYYY');
threeDay.textContent = dayjs().add(3, "day").format('MM/DD/YYYY');
fourDay.textContent = dayjs().add(4, "day").format('MM/DD/YYYY');
fiveDay.textContent = dayjs().add(5, "day").format('MM/DD/YYYY');

// this function gets the value from the input and sets to local storage
function getApi(){
    let cityNameVal = document.querySelector("input").value;
    if(!cityNameVal){
        alert("Please enter a city name to view the weather forecast.");
        return;
    }
    cityList.push(cityNameVal);
    // if city is present then do nothing, else push cityname, into city list array indexOf
    let getCity = localStorage.setItem("cityNames", JSON.stringify(cityList));
    // cityList.unshift(cityNameVal);
    displaySearchHistory();
    console.log(getCity);
    searchApi(cityNameVal);
    clearInput.value = "" ;
};

// this function displays the recent search history below search button
function displaySearchHistory(){
    searchHistoryEl.innerHTML = ""
    let cityListArr = JSON.parse(localStorage.getItem("cityNames")) || [];
    for (let i = 0; i < cityListArr.length; i++) {
        let recentSearchBtn = document.createElement("button");
        recentSearchBtn.setAttribute("data-search", cityList[i])
        recentSearchBtn.classList.add("searchHistoryBtns");
        recentSearchBtn.textContent = cityListArr[i];
        console.log(cityListArr);
        searchHistoryEl.append(recentSearchBtn);
}};

//  get city name for display and latitude/longitude for weather api (input value)
function searchApi(cityNameVal){
    console.log(cityNameVal);  

    let requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=` + cityNameVal + `&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7`
    
    fetch(requestUrl)
        .then(function (response){
            return response.json()     
        })
        .then(function (data){
            console.log(data);
              let lonDaily = data[0].lon;
              let latDaily = data[0].lat;
            let city = document.getElementById('currentCity'); 
            city.textContent = data[0].name;

//  2nd Api call to get weather data using latitude and longitude retreived from first api call
    let requestUrlLatLon = `https://api.openweathermap.org/data/2.5/weather?lat=` + latDaily + `&lon=` + lonDaily + `&units=imperial&appid=d9e8fa6428a49966fe0b0aa58e369bf7`
    
    fetch(requestUrlLatLon)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
            let weather = document.getElementById('currentWeather');
            let temp = document.getElementById('currentTemp');  
            let icon = document.querySelector('.icon'); 
            let imgIcon = document.createElement('img');
            let iconUrl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            imgIcon.setAttribute("src", iconUrl);
            icon.append(imgIcon);
            weather.textContent = "Current Sky: " + data.weather[0].main;
            temp.textContent = "Current Temp: " + data.main.temp + " °F";

    let fiveDay = `https://api.openweathermap.org/data/2.5/forecast?lat=` + latDaily + `&lon=` + lonDaily + `&units=imperial&appid=d9e8fa6428a49966fe0b0aa58e369bf7`
  
    // 5 day forcast
    fetch(fiveDay)
        .then(function (response){
            return response.json();
        })
        .then(function(data){
        console.log(data);
        
        let oneSky = document.getElementById("dayOneSky");    
        let oneTemp = document.getElementById("dayOneTemp");
        let oneWind = document.getElementById("dayOneWind");
        let twoSky = document.getElementById("dayTwoSky");    
        let twoTemp = document.getElementById("dayTwoTemp");
        let twoWind = document.getElementById("dayTwoWind");
        let threeSky = document.getElementById("dayThreeSky");    
        let threeTemp = document.getElementById("dayThreeTemp");
        let threeWind = document.getElementById("dayThreeWind");
        let fourSky = document.getElementById("dayFourSky");    
        let fourTemp = document.getElementById("dayFourTemp");
        let fourWind = document.getElementById("dayFourWind");
        let fiveSky = document.getElementById("dayFiveSky");    
        let fiveTemp = document.getElementById("dayFiveTemp");
        let fiveWind = document.getElementById("dayFiveWind");
        oneSky.textContent = "Sky: " + data.list[0].weather[0].main;
        oneTemp.textContent = "Temp: " + data.list[0].main.temp + ' °F';
        oneWind.textContent = "Wind Speed: " + data.list[0].wind.speed;
        twoSky.textContent = "Sky: " + data.list[1].weather[0].main;
        twoTemp.textContent = "Temp: " + data.list[1].main.temp + ' °F';
        twoWind.textContent = "Wind Speed: " + data.list[1].wind.speed;
        threeSky.textContent = "Sky: " + data.list[2].weather[0].main;
        threeTemp.textContent = "Temp: " + data.list[2].main.temp + ' °F';
        threeWind.textContent = "Wind Speed: " + data.list[2].wind.speed;
        fourSky.textContent = "Sky: " + data.list[3].weather[0].main;
        fourTemp.textContent = "Temp: " + data.list[3].main.temp + ' °F';
        fourWind.textContent = "Wind Speed: " + data.list[3].wind.speed;
        fiveSky.textContent = "Sky: " + data.list[4].weather[0].main;
        fiveTemp.textContent = "Temp: " + data.list[4].main.temp + ' °F';
        fiveWind.textContent = "Wind Speed: " + data.list[4].wind.speed;

})
})
})};



// Grabs attribute and displays weather for recently searched cities
function searchHistoryClick(e) {
    e.preventDefault();
    let entryButton = e.target
    let search = entryButton.getAttribute("data-search");
    showCurrentEl.classList.replace("hidden", "visible");
    showFiveDayEl.classList.replace("hidden", "visible");
    showCardsEl.classList.replace("hidden", "visible");
    searchApi(search);
}

// submit button click event to run weather api
submitButton.addEventListener("click", getApi)

submitButton.addEventListener("click", function(){
    showCurrentEl.classList.replace("hidden", "visible");
    showFiveDayEl.classList.replace("hidden", "visible");
    showCardsEl.classList.replace("hidden", "visible");
});

// recent search target click to display recent search weather
searchHistoryEl.addEventListener("click", searchHistoryClick);

// calls the function to display the search history
displaySearchHistory();
