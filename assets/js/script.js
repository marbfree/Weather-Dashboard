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
}

//    get latitude and longitude from api call
    
  function searchApi(cityNameVal){
        console.log(cityNameVal);  

    let requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=` + cityNameVal + `&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7`
    let requestUrlLatLon = `http://api.openweathermap.org/geo/1.0/reverse?` +lat={lat}&lon={lon} + `&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7`

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
            for (let i = 0; i < data.length; i++){
              let cityDaily = document.querySelector("#currentCity");
              let lonDaily = document.querySelector("#currentLongitude");
              let latDaily = document.querySelector("#currentLatitude");
              cityDaily.textContent = data[i].name;
              lonDaily.textContent = data[i].lon;
              latDaily.textContent = data[i].lat;
            console.log(data[i]);
            console.log(data[i]);}
        });  

    }


submitButton.addEventListener("click", getApi);


// pass value to url
// get lat/long from query
// resubmit using lat/long to get 5 day forcast