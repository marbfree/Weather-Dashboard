let apiKey = 'd9e8fa6428a49966fe0b0aa58e369bf7'
var submitButton = document.querySelector(".btn");

function getApi(){
    // get value from input
    let cityNameVal = document.querySelector("input").value;
    console.log(cityNameVal);
    // set value to local storage
    let getCity = localStorage.setItem("cityName", cityNameVal);
    console.log(getCity);
    searchApi(cityNameVal);
};


//    get city name for display and latitude/longitude for weather api (input value)
  function searchApi(cityNameVal){
        console.log(cityNameVal);  

    let requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=` + cityNameVal + `&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7`
    
    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
              let lonDaily = data[0].lon;
              let latDaily = data[0].lat;
            let city = document.getElementById('currentCity')
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
            weather.textContent = "Current Sky: " + data.weather[0].main;
            temp.textContent = "Current Temp: " + data.main.temp + " F";
            console.log(data.main);
            console.log(data.main.temp);

    let fiveDay = `api.openweathermap.org/data/2.5/forecast?lat=` + latDaily + `&lon=` + lonDaily + `&appid=d9e8fa6428a49966fe0b0aa58e369bf7`
  
    fetch(fiveDay)
            .then(function (response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
            })
})
    
    

 })};


submitButton.addEventListener("click", getApi);


//display data to page