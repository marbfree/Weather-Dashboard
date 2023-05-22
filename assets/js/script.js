let apiKey = 'd9e8fa6428a49966fe0b0aa58e369bf7'
var submitButton = document.querySelector(".btn");

function getApi(){
    // get value from input
    let cityNameVal = document.querySelector("input").value;
    console.log(cityNameVal);
    // set value to local storage
    let getCity = localStorage.setItem("cityName", cityNameVal);
    console.log(getCity);
    

    // get value from local storage to plug into url
        // relplace search with city name
    
  function searchApi(){
        
    // seperate city from limit in query parameters
    let cityArr = document.location.search.split('&');
    console.log(cityArr);
    // replace city name with city name from input value
    let addCity = cityArr[0].replace(cityNameVal);
    console.log(addCity);
}

    searchApi();
    console.log(searchApi);

    let requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=d9e8fa6428a49966fe0b0aa58e369bf7`


    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            for (let i = 0; i < data.length; i++){
              let cityDaily = document.querySelector("#currentCity");
              let lonDaily = document.querySelector("#currentLongitude");
              let latDaily = document.querySelector("#currentLatitude");
              cityDaily.textContent = data[i].name;
              lonDaily.textContent = data[i].coord;
              latDaily.textContent = data[i].main;
            console.log(data[i]);
            console.log(data[i]);}
        });  
};


submitButton.addEventListener("click", getApi);


// pass value to url
// get lat/long from query
// resubmit using lat/long to get 5 day forcast